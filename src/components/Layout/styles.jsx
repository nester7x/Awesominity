import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

import { device } from "utils/mediaQueries";
import Input from "../Input";
import Button from "../Button";

export const Wrapper = styled.div`
  background-color: #fbfbfb;
  position: relative;
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: auto;
  &.open {
    overflow: hidden;
  }
`;

export const Main = styled.main`
  overflow-y: auto;
  padding: 15px 0 15px;
  width: 100%;
`;

export const MainContainer = styled(Container)`
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  z-index: 300;
  padding: 40px 0;
  @media screen and ${device.mobileL} {
    padding: 8px 0;
  }
`;

export const HeaderInner = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled(NavLink)`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  transition: 0.4s;
  &.open {
    color: #ffffff;
    z-index: 200;
  }
  @media screen and ${device.tablet} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const MenuBurger = styled.div`
  display: none;
  z-index: 100;
  @media screen and ${device.tablet} {
    z-index: 200;
    cursor: pointer;
    display: block;
    width: 20px;
    height: 15px;
    position: relative;
    background-color: transparent;
    :after,
    :before,
    span {
      transition: 0.4s;
      position: absolute;
      content: "";
      background-color: #000000;
      height: 2.22px;
      right: 0;
    }
    :after {
      width: 18px;
      top: 0;
    }
    :before {
      width: 12px;
      bottom: 0;
    }
    span {
      width: 18px;
      top: 6px;
    }
    &.open:after {
      background-color: #ffffff;
      transform: scale(0);
    }
    &.open:before {
      background-color: #ffffff;
      bottom: 6px;
      width: 18px;
      transform: rotate(45deg);
    }
    span.open {
      background-color: #ffffff;
      top: 6px;
      transform: rotate(-45deg);
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and ${device.tablet} {
    position: absolute;
    background-color: transparent;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%) scale(0);
    transition: 0.4s;
    opacity: 0;
    z-index: 105;
    flex-direction: column;
    justify-content: space-between;
    align-items: normal;
    padding: 150px 20px 10px;
    &.open {
      background-color: #000000;
      transition: 0.4s;
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 23px;
  @media screen and ${device.laptop} {
    margin: 0 12px;
  }
  @media screen and ${device.tablet} {
    margin: 0 4px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  position: relative;
  &.sub__menu {
    display: flex;
    align-items: center;
  }
  span.menu__arrow {
    display: block;
    margin: 0 0 0 8px;
    width: 0;
    height: 0;
    border: solid #000000;
    border-width: 0 1.5px 1.5px 0;
    padding: 3px;
    transform: rotate(45deg);
  }
  .menu__sub-list {
    transform: translate(0px, 10%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.3s;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: transparent;
    padding: 10px;
    min-width: 180px;
    border-radius: 3px;
  }
  &:hover .menu__sub-list {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    background-color: #1b1b1b;
    transform: translate(0px, 0px);
  }
  .menu__sub-link {
    color: #ffffff;
  }
  @media screen and ${device.tablet} {
    color: #ffffff;
    font-size: 14px;
    line-height: 16px;
    &.user_link,
    &.basket_link {
      position: absolute;
      bottom: 10%;
    }
    &.user_link {
      left: 35%;
    }
    &.basket_link {
      right: 35%;
    }
    .menu__sub-list {
      right: auto;
      left: 0;
    }
    span.menu__arrow {
      border: solid #ffffff;
      border-width: 0 1.5px 1.5px 0;
    }
    .menu__sub-link {
      color: #ffffff;
    }
  }
`;

export const ActiveLink = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  @media screen and ${device.tablet} {
    font-weight: 700;
    color: #ffffff;
  }
`;

export const Footer = styled.footer`
  background-color: #000000;
  padding: 80px 0 66px;
  width: 100%;
  color: #ffffff;
  @media screen and ${device.tablet} {
    padding: 19px 0 35px;
  }
`;

export const FooterInner = styled(Container)``;

export const FooterLogoWrapper = styled.div`
  margin: 0 0 45px 0;
  padding: 0 0 45px 0;
  border-bottom: 1px solid #ffffff;
  display: flex;
  justify-content: center;
  @media screen and ${device.tablet} {
    margin: 0 0 20px 0;
    padding: 0 0 20px 0;
  }
`;

export const FooterLogo = styled(NavLink)`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`;

export const FooterInfo = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 0 -15px;
  flex-wrap: wrap;
  @media screen and ${device.tablet} {
    flex-wrap: wrap;
    padding: 0 0 0;
  }
`;

export const FooterList = styled.ul`
  margin: 0 15px;
`;

export const FooterHeading = styled.h6`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  margin: 0 0 20px;
`;

export const FooterLink = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 25px;
  max-width: 300px;
  color: #ffffff;
  display: flex;
  align-items: center;
  @media screen and ${device.tablet} {
    align-items: flex-start;
    flex-direction: column;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 20px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 14px;
  background-color: #131313;
  border-radius: 10px;
  margin: 0 15px;
`;

export const FormTitle = styled.h6`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin: 0 0 29px 0;
  @media screen and ${device.tablet} {
    margin: 0 0 23px 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin: 0 0 19px 0;
`;

export const CustomInput = styled(Input)`
  && {
    padding: 10px 10px 12px 10px;
    font-family: "Poppins", sans-serif;
    font-size: 11px;
    line-height: 16px;
    color: #616161;
    background-color: #1e1e1e;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const CustomButton = styled(Button)`
  && {
    padding: 11px 22px 10px 22px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 18px;
    color: #ffffff;
    background-color: #000000;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const FormInfo = styled.p`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.5;
`;
