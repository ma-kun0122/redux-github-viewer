import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = ({ value, isAllChecked, onChangeAllCheckbox }) => {
  return (
    <>
      <InputCheckBox type="checkbox" value={value} checked={isAllChecked} />
    </>
  );
};

export default CheckBox;
