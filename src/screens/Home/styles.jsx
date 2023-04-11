import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { device } from "utils/mediaQueries";
import BG from "assets/Images/opportunity_img.jpg";

export const Wrapper = styled.div`
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 50px;
  border-radius: 8px;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin: 0 0 25px;
`;

export const SubTitle = styled.p`
  color: #ffffff;
  margin: 0 0 25px;
`;

export const CustomBtn = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  background: rgba(57, 66, 82, 100%);
  color: #ffffff;
  text-transform: uppercase;
  padding: 15px 30px;
  transition: 0.3s;
  border-radius: 4px;
  :hover {
    background-color: rgba(57, 66, 82, 40%);
    box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
  @media screen and ${device.tablet} {
    font-size: 15px;
    line-height: 18px;
  }
  @media screen and ${device.mobileL} {
    font-size: 14px;
    line-height: 16px;
  }
`;
