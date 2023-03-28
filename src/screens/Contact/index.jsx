import React from "react";

import PhoneIcon from "assets/Images/phone-call-icon.svg";
import EmailIcon from "assets/Images/email-icon.svg";
import LocationIcon from "assets/Images/location-icon.svg";
import TwitterIcon from "assets/Images/twitter-icon.svg";
import InstagramIcon from "assets/Images/instagram-icon.svg";
import DiscordIcon from "assets/Images/discord-icon.svg";
import ContactForm from "./components/ContactForm";

import * as S from "./styles";

const Contact = () => {
  const contactLinks = [
    {
      component: (
        <S.ContactLink to="tell: +10123456789">
          <PhoneIcon />
          <span> +1012 3456 789</span>
        </S.ContactLink>
      ),
      key: "number",
    },
    {
      component: (
        <S.ContactLink to="mailto: demo@gmail.com">
          <EmailIcon />
          <span> demo@gmail.com</span>
        </S.ContactLink>
      ),
      key: "email",
    },
    {
      component: (
        <S.ContactLink to="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r">
          <LocationIcon />
          <span>
            132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
            States
          </span>
        </S.ContactLink>
      ),
      key: "location",
    },
  ];

  const socialLinks = [
    {
      component: (
        <S.SocialLink href="https://twitter.com/?lang=uk">
          <TwitterIcon />
        </S.SocialLink>
      ),
      key: "twitter",
    },
    {
      component: (
        <S.SocialLink href="https://www.instagram.com/">
          <InstagramIcon />
        </S.SocialLink>
      ),
      key: "instagram",
    },
    {
      component: (
        <S.SocialLink href="https://discord.com/">
          <DiscordIcon />
        </S.SocialLink>
      ),
      key: "discord",
    },
  ];

  return (
    <S.Wrapper>
      <S.Title>Contact Us</S.Title>
      <S.SubTitle>Any question or remarks? Just write us a message!</S.SubTitle>
      <S.Content>
        <S.Inform>
          <S.InformTitle>Contact Information</S.InformTitle>
          <S.InformSubTitle>
            Say something to start a live chat!
          </S.InformSubTitle>
          <S.ContactLinks>
            {contactLinks.map((item) => (
              <S.ContactItem key={item.key}>{item.component}</S.ContactItem>
            ))}
          </S.ContactLinks>
          <S.SocialLinks>
            {socialLinks.map((item) => (
              <S.SocialItem key={item.key}>{item.component}</S.SocialItem>
            ))}
          </S.SocialLinks>
        </S.Inform>
        <ContactForm />
      </S.Content>
    </S.Wrapper>
  );
};

export default Contact;
