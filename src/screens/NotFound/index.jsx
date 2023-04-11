import React from "react";

import NotFoundImg from "assets/Images/404.png";

import * as S from "./styles";

const NotFound = () => (
  <S.Wrapper>
    <S.Info>
      <img
        src={NotFoundImg}
        alt="Not Found"
        style={{ width: "50%", display: "block", margin: "0 auto" }}
      />
      <S.Message>PAGE NOT FOUND</S.Message>
      <S.Btn to="/">go back home</S.Btn>
    </S.Info>
  </S.Wrapper>
);

export default NotFound;
