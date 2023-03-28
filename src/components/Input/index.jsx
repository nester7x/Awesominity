import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Input = ({ onChange, value, type, errorText, ...rest }) => (
  <>
    <S.InputStyled {...rest} type={type} onChange={onChange} value={value} />
    {errorText && <S.Error>{errorText}</S.Error>}
  </>
);

Input.defaultProps = {
  onChange: () => {},
  value: null,
  type: "text",
  errorText: "",
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  errorText: PropTypes.string,
};

export default Input;
