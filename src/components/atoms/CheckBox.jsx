import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = ({ onChange, value, isAllChecked }) => {
  return (
    <>
      <InputCheckBox type="checkbox" onChange={onChange} value={value} />
    </>
  );
};

export default CheckBox;
