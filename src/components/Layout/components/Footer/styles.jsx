import styled from "styled-components";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";

import { device } from "utils/mediaQueries";
import Input from "components/Input";
import Button from "components/Button";

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
