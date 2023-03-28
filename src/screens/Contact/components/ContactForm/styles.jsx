import styled from "styled-components";

import Input from "components/Input";
import Button from "components/Button";
import { device } from "utils/mediaQueries";

export const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 0 50px;
  padding: 50px 0 50px;
  @media screen and ${device.tablet} {
    padding: 30px 21px;
    margin: 0;
  }
`;

export const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 45px;
  @media screen and ${device.tabletS} {
    margin: 0 0 25px;
  }
`;

export const SelectTitle = styled.h6`
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 0 0 15px;
  @media screen and ${device.tabletS} {
    margin: 0 0 10px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
  margin: 0 20px 14px 0;
  span {
    padding: 0 10px 0 0;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #8d8d8d;
  padding: 0 0 45px;
  @media screen and ${device.tabletS} {
    width: 100%;
    padding: 0 0 20px;
  }
`;

export const FormInput = styled(Input)`
  && {
    width: 100%;
  }
`;

export const MessageLabel = styled.label`
  width: 100%;
  color: #8d8d8d;
  padding: 0 0 45px;
  @media screen and ${device.tabletS} {
    padding: 0 0 20px;
  }
`;

export const MessageInput = styled(Input)`
  && {
    width: 100%;
  }
`;

export const FormButton = styled(Button)`
  && {
    margin-left: auto;
    padding: 15px 48px;
    :disabled {
      opacity: 0.6;
      color: #ffffff;
    }
    @media screen and ${device.tabletS} {
      width: 100%;
      margin-left: initial;
      justify-self: center;
    }
  }
`;
