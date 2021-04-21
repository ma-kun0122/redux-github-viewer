import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = ({ onChange, value, isAllChecked }) => {
  console.log(isAllChecked);
  return (
    <>
      <InputCheckBox
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={isAllChecked ? true : false}
      />
    </>
  );
};

export default CheckBox;
