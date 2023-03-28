import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Footer from "./components/Footer";

import * as S from "./styles";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const menuRef = useRef(null);

  const handleInputChange = ({ target }) => setInputValue(target.value);

  useEffect(() => {
    const closeDropDown = async (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropDown);

    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
      alert(
        `You will be receiving news on this email: ${inputValue}. Thank you!`
      );
      setInputValue("");
    } else {
      alert("Email is incorrect!");
    }
  };

  return (
    <S.Wrapper className={isOpen ? "open" : "closed"}>
      <Header isOpen={isOpen} menuRef={menuRef} setIsOpen={setIsOpen} />

      <S.Main>
        <S.MainContainer>{children}</S.MainContainer>
      </S.Main>

      <Footer
        onSubmit={onSubmit}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
