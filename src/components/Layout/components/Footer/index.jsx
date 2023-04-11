import React from "react";
import PropTypes from "prop-types";

import PhoneIcon from "assets/Images/phone-call-icon.svg";
import EmailIcon from "assets/Images/email-icon.svg";
import LocationIcon from "assets/Images/location-icon.svg";

import * as S from "./styles";

const Footer = ({ inputValue, handleInputChange, onSubmit }) => {
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

  return (
    <S.Footer>
      <S.FooterInner>
        <S.FooterLogoWrapper>
          <S.FooterLogo to="/">Awesominity</S.FooterLogo>
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
  );
};

Footer.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Footer;
