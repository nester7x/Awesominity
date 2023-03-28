import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import CircleUnchecked from "@mui/icons-material/Lens";
import CircleChecked from "@mui/icons-material/CheckCircle";

import { validate } from "utils/validation";

import * as S from "./styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
    check1: true,
    check2: false,
    check3: false,
    check4: false,
  });

  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isDirty, setIsDirty] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  const handleDataChange = (event) => {
    const { target } = event;
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleCheckboxChange = (event) => {
    const { target } = event;
    setFormData((prev) => ({ ...prev, [target.name]: target.checked }));
  };

  useEffect(() => {
    Object.keys(inputError).forEach((key) => {
      setInputError((prev) => ({
        ...prev,
        [key]: validate(key, formData[key], formData),
      }));
    });
  }, [formData]);

  const blurHandler = (e) => {
    const { target } = e;
    Object.keys(isDirty).forEach(() => {
      setIsDirty((prev) => ({
        ...prev,
        [target.name]: true,
      }));
    });
  };

  const inputs = [
    {
      component: (
        <S.InputLabel>
          First Name
          <S.FormInput
            value={formData.firstname}
            name="firstname"
            onChange={handleDataChange}
            onBlur={(e) => blurHandler(e)}
            errorText={
              isDirty.firstname && inputError.firstname
                ? inputError.firstname
                : ""
            }
          />
        </S.InputLabel>
      ),
      key: "first_name",
    },
    {
      component: (
        <S.InputLabel>
          Last Name
          <S.FormInput
            value={formData.lastname}
            name="lastname"
            onChange={handleDataChange}
            onBlur={(e) => blurHandler(e)}
            errorText={
              isDirty.lastname && inputError.lastname ? inputError.lastname : ""
            }
          />
        </S.InputLabel>
      ),
      key: "last_name",
    },
    {
      component: (
        <S.InputLabel>
          Email
          <S.FormInput
            value={formData.email}
            name="email"
            onChange={handleDataChange}
            onBlur={(e) => blurHandler(e)}
            errorText={
              isDirty.email && inputError.email ? inputError.email : ""
            }
          />
        </S.InputLabel>
      ),
      key: "email",
    },
    {
      component: (
        <S.InputLabel>
          Phone Number
          <S.FormInput
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={handleDataChange}
            onBlur={(e) => blurHandler(e)}
            errorText={
              isDirty.phoneNumber && inputError.phoneNumber
                ? inputError.phoneNumber
                : ""
            }
          />
        </S.InputLabel>
      ),
      key: "name",
    },
  ];

  const checkBoxes = [
    {
      component: (
        <S.CheckboxLabel>
          <Checkbox
            checked={formData.check1}
            onChange={handleCheckboxChange}
            name="check1"
            sx={{
              color: "#e0e0e0",
              "&.Mui-checked": {
                color: "#000000",
              },
            }}
            icon={<CircleUnchecked />}
            checkedIcon={<CircleChecked />}
          />
          General Inquiry
        </S.CheckboxLabel>
      ),
      key: "check1",
    },
    {
      component: (
        <S.CheckboxLabel>
          <Checkbox
            checked={formData.check2}
            onChange={handleCheckboxChange}
            name="check2"
            sx={{
              color: "#e0e0e0",
              "&.Mui-checked": {
                color: "#000000",
              },
            }}
            icon={<CircleUnchecked />}
            checkedIcon={<CircleChecked />}
          />
          General Inquiry
        </S.CheckboxLabel>
      ),
      key: "check2",
    },
    {
      component: (
        <S.CheckboxLabel>
          <Checkbox
            checked={formData.check3}
            onChange={handleCheckboxChange}
            name="check3"
            sx={{
              color: "#e0e0e0",
              "&.Mui-checked": {
                color: "#000000",
              },
            }}
            icon={<CircleUnchecked />}
            checkedIcon={<CircleChecked />}
          />
          General Inquiry
        </S.CheckboxLabel>
      ),
      key: "check3",
    },
    {
      component: (
        <S.CheckboxLabel>
          <Checkbox
            checked={formData.check4}
            onChange={handleCheckboxChange}
            name="check4"
            sx={{
              color: "#e0e0e0",
              "&.Mui-checked": {
                color: "#000000",
              },
            }}
            icon={<CircleUnchecked />}
            checkedIcon={<CircleChecked />}
          />
          General Inquiry
        </S.CheckboxLabel>
      ),
      key: "check4",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    alert(
      `Data has sent! 
      ${formData.firstname}, ${formData.lastname}, ${formData.email}, ${formData.phoneNumber},${formData.check1}, ${formData.check2}, ${formData.check3}, ${formData.check4}, ${formData.message}`
    );
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      message: "",
      check1: true,
      check2: false,
      check3: false,
      check4: false,
    });
  };

  return (
    <S.Wrapper onSubmit={onSubmit}>
      {inputs.map((item) => item.component)}
      <S.CustomSelect>
        <S.SelectTitle>Select Subject?</S.SelectTitle>
        {checkBoxes.map((item) => item.component)}
      </S.CustomSelect>
      <S.MessageLabel>
        Message
        <S.MessageInput
          value={formData.message}
          name="message"
          onChange={handleDataChange}
          onBlur={(e) => blurHandler(e)}
          placeholder="Write your message.."
          errorText={
            isDirty.message && inputError.message ? inputError.message : ""
          }
        />
      </S.MessageLabel>
      <S.FormButton
        type="submit"
        disabled={Object.values(inputError).join("") !== ""}
      >
        Send Message
      </S.FormButton>
    </S.Wrapper>
  );
};

export default ContactForm;
