import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Circles from "assets/Images/circles.png";
import LetterSend from "assets/Images/letter_send.png";
import { device } from "utils/mediaQueries";

export const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #000000;
  margin: 0 0 10px;
  @media screen and ${device.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #717171;
  margin: 0 0 50px;
  @media screen and ${device.tablet} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Content = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.03);
  padding: 10px 50px 10px 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  background-image: url(${LetterSend});
  background-repeat: no-repeat;
  background-position: 800px 530px;
  background-size: 20%;
  @media screen and ${device.tablet} {
    padding: 5px;
    flex-direction: column;
    align-items: center;
    background-position: center 1000px;
  }
`;

export const Inform = styled.div`
  background-color: #000000;
  border-radius: 10px;
  padding: 40px 40px 36px;
  width: 100%;
  background-image: url(${Circles});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 300px 460px;
  @media screen and ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px 25px;
  }
`;

export const InformTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  margin: 0 0 6px;
  @media screen and ${device.tablet} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const InformSubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #c9c9c9;
  margin: 0 0 111px;
  @media screen and ${device.tablet} {
    font-size: 11px;
    line-height: 16px;
    margin: 0 0 12px;
  }
`;

export const ContactLinks = styled.ul`
  margin: 0 0 150px;
  @media screen and ${device.tablet} {
    margin: 0 0 58px;
  }
`;

export const ContactItem = styled.li`
  margin: 0 0 50px;
  @media screen and ${device.tablet} {
    margin: 0 0 15px;
  }
`;

export const ContactLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  span {
    margin: 0 0 0 25px;
  }
  @media screen and ${device.tablet} {
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    span {
      margin: 0;
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
`;

export const SocialItem = styled.li`
  margin: 0 25px 0 0;
  @media screen and ${device.tablet} {
    margin: 0 12px;
  }
`;

export const SocialLink = styled(NavLink)`
  circle,
  path {
    transition: 0.3s;
  }
  :hover {
    circle {
      fill: #ffffff;
    }
    path {
      fill: #1b1b1b;
    }
  }

  circle {
    fill: #1b1b1b;
  }
  path {
    fill: #ffffff;
  }
`;
