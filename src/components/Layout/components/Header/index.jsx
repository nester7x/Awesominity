import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import * as S from "./styles";

const Header = ({ isOpen, menuRef, setIsOpen }) => {
  const location = useLocation();

  const headerLinks = [
    {
      component: <S.Link to="">Home</S.Link>,
      activeComponent: <S.ActiveLink to="">Home</S.ActiveLink>,
      key: "home",
    },
    {
      component: <S.Link to="contact">Contact</S.Link>,
      activeComponent: <S.ActiveLink to="contact">Contact</S.ActiveLink>,
      key: "contact",
    },
  ];

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo to="/" className={isOpen ? "open" : "closed"}>
          Awesominity
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
