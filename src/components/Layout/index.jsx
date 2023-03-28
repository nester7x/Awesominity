import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, NavLink } from "react-router-dom";

import UserIcon from "assets/Images/user-icon.svg";
import UserIconMob from "assets/Images/user-icon-mob.svg";
import BasketIcon from "assets/Images/basket-icon.svg";
import BasketIconMob from "assets/Images/basket-icon-mob.svg";
import PhoneIcon from "assets/Images/phone-call-icon.svg";
import EmailIcon from "assets/Images/email-icon.svg";
import LocationIcon from "assets/Images/location-icon.svg";

import * as S from "./styles";

const Layout = ({ children }) => {
  const location = useLocation();
  const menuRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = ({ target }) => setInputValue(target.value);

  useEffect(() => {
    const closeDropDown = async (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropDown);

    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);

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

  const footerLinks = [
    {
      heading: "Reach Us",
      items: [
        {
          component: (
            <S.FooterLink to="tell: +10123456789">
              <PhoneIcon style={{ marginRight: "25px" }} />
              +1012 3456 789
            </S.FooterLink>
          ),
          key: "number",
        },
        {
          component: (
            <S.FooterLink to="mailto: demo@gmail.com">
              <EmailIcon style={{ marginRight: "25px" }} />
              demo@gmail.com
            </S.FooterLink>
          ),
          key: "email",
        },
        {
          component: (
            <S.FooterLink
              style={{ alignItems: "flex-start" }}
              to="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r"
            >
              <LocationIcon style={{ marginRight: "25px" }} />
              132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
              States
            </S.FooterLink>
          ),
          key: "location",
        },
      ],
    },
    {
      heading: "Company",
      items: [
        {
          component: <S.FooterLink to="about">About</S.FooterLink>,
          key: "about",
        },
        {
          component: <S.FooterLink to="contact">Contact</S.FooterLink>,
          key: "contact",
        },
        {
          component: <S.FooterLink to="blogs">Blogs</S.FooterLink>,
          key: "blogs",
        },
      ],
    },
    {
      heading: "Legal",
      items: [
        {
          component: (
            <S.FooterLink to="privacy_policy">Privacy Policy</S.FooterLink>
          ),
          key: "privacy_policy",
        },
        {
          component: (
            <S.FooterLink to="terms_services">Terms & Services</S.FooterLink>
          ),
          key: "terms_services",
        },
        {
          component: (
            <S.FooterLink to="terms_of_use">Terms of Use</S.FooterLink>
          ),
          key: "terms_of_use",
        },
        {
          component: (
            <S.FooterLink to="refund_policy">Refund Policy</S.FooterLink>
          ),
          key: "refund_policy",
        },
      ],
    },
    {
      heading: "Quick Links",
      items: [
        {
          component: <S.FooterLink to="keybox">Techlabz Keybox</S.FooterLink>,
          key: "keybox",
        },
        {
          component: <S.FooterLink to="downloads">Downloads</S.FooterLink>,
          key: "downloads",
        },
        {
          component: <S.FooterLink to="forum">Forum</S.FooterLink>,
          key: "forum",
        },
      ],
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
      alert(
        `You will be receiving news on this email: ${inputValue}. Thank you!`
      );
      setInputValue("");
    } else {
      alert("Email is incorrect!");
    }
  };

  return (
    <S.Wrapper className={isOpen ? "open" : "closed"}>
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

      <S.Main>
        <S.MainContainer>{children}</S.MainContainer>
      </S.Main>

      <S.Footer>
        <S.FooterInner>
          <S.FooterLogoWrapper>
            <S.FooterLogo to="/">Logo Here</S.FooterLogo>
          </S.FooterLogoWrapper>
          <S.FooterInfo>
            {footerLinks.map((section, index) => (
              <S.FooterList>
                <li key={index}>
                  <S.FooterHeading>{section.heading}</S.FooterHeading>
                </li>
                {section.items.map((item) => (
                  <li key={item.key}>{item.component}</li>
                ))}
              </S.FooterList>
            ))}
            <S.FormWrapper onSubmit={onSubmit}>
              <S.FormTitle>Join Our Newsletter</S.FormTitle>
              <S.InputWrapper>
                <S.CustomInput
                  type="text"
                  placeholder="Your email address"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <S.CustomButton type="submit">Subscribe</S.CustomButton>
              </S.InputWrapper>
              <S.FormInfo>
                * Will send you weekly updates for your <br /> better tool
                management.
              </S.FormInfo>
            </S.FormWrapper>
          </S.FooterInfo>
        </S.FooterInner>
      </S.Footer>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
