import React from "react";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Title>Take the first step to finding your job.</S.Title>
      <S.SubTitle>
        Explore thousands of job opportunities with all the information you
        need. <br />
        Press the button bellow to contact us.
      </S.SubTitle>
      <S.CustomBtn to="/contact">Contact Us</S.CustomBtn>
    </S.Wrapper>
  );
};

export default Home;
