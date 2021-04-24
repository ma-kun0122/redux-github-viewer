import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = ({
  stopModalEvent,
  onChange,
  value,
  isAllChecked,
  onClick,
}) => {
  return (
    <>
      <InputCheckBox
        type="checkbox"
        onChange={onChange}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </>
  );
};

export default CheckBox;
