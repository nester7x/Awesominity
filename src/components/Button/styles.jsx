import styled from "styled-components";
import Button from "@mui/material/Button";

import { device } from "utils/mediaQueries";

export default styled(Button)`
  && {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 18px;
    background: #000000;
    color: #ffffff;
    text-transform: uppercase;
    padding: 10px 23px;
    :hover {
      background-color: rgba(57, 66, 82, 100%);
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
  }
`;
