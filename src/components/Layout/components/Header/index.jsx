import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import UserIconMob from "assets/Images/user-icon-mob.svg";
import UserIcon from "assets/Images/user-icon.svg";
import BasketIconMob from "assets/Images/basket-icon-mob.svg";
import BasketIcon from "assets/Images/basket-icon.svg";

import * as S from "./styles";

const Header = ({ isOpen, menuRef, setIsOpen }) => {
  const location = useLocation();

  const headerLinks = [
    {
      component: <S.Link to="/">Home</S.Link>,
      activeComponent: <S.ActiveLink to="/">Home</S.ActiveLink>,
      key: "home",
    },
    {
      component: (
        <S.Link to="features" className="sub__menu">
          Features
          <span className="menu__arrow" />
          <ul className="menu__sub-list">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={`${index}-features`}>
                <NavLink
                  className="menu__sub-link"
                  to="/"
                >{`element number ${index}`}</NavLink>
              </li>
            ))}
          </ul>
        </S.Link>
      ),
      activeComponent: (
        <S.ActiveLink to="features">
          Features
          <span className="menu__arrow" />
          <ul className="menu__sub-list">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={`${index}-features`}>
                <NavLink
                  className="menu__sub-link"
                  to="/"
                >{`element number ${index}`}</NavLink>
              </li>
            ))}
          </ul>
        </S.ActiveLink>
      ),
      key: "features",
    },
    {
      component: <S.Link to="blog">Blog</S.Link>,
      activeComponent: <S.ActiveLink to="blog">Blog</S.ActiveLink>,
      key: "blog",
    },
    {
      component: <S.Link to="shop">Shop</S.Link>,
      activeComponent: <S.ActiveLink to="shop">Shop</S.ActiveLink>,
      key: "shop",
    },
    {
      component: <S.Link to="about">About</S.Link>,
      activeComponent: <S.ActiveLink to="about">About</S.ActiveLink>,
      key: "about",
    },
    {
      component: <S.Link to="contact">Contact</S.Link>,
      activeComponent: <S.ActiveLink to="contact">Contact</S.ActiveLink>,
      key: "contact",
    },
    {
      component: (
        <S.Link to="user" className="user_link">
          {isOpen ? <UserIconMob /> : <UserIcon />}
        </S.Link>
      ),
      activeComponent: (
        <S.ActiveLink to="user" className="user_link">
          {isOpen ? <UserIconMob /> : <UserIcon />}
        </S.ActiveLink>
      ),
      key: "user",
    },
    {
      component: (
        <S.Link to="basket" className="basket_link">
          {isOpen ? <BasketIconMob /> : <BasketIcon />}
        </S.Link>
      ),
      activeComponent: (
        <S.ActiveLink to="basket" className="basket_link">
          {isOpen ? <BasketIconMob /> : <BasketIcon />}
        </S.ActiveLink>
      ),
      key: "basket",
    },
  ];

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo to="/" className={isOpen ? "open" : "closed"}>
          Logo Here
        </S.Logo>
        <S.MenuBurger
          className={isOpen ? "open" : "closed"}
          ref={menuRef}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span className={isOpen ? "open" : "closed"} />
        </S.MenuBurger>
        <S.Menu className={isOpen ? "open" : "closed"}>
          {headerLinks.map((item) => (
            <S.MenuItem key={item.key}>
              {location.pathname.split("/")[1] === item.component.props.to
                ? item.activeComponent
                : item.component}
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.HeaderInner>
    </S.Header>
  );
};

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuRef: PropTypes.instanceOf(Element).isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Header;
