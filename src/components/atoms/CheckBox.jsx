import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = ({ onChange, value }) => {
  return (
    <>
      <InputCheckBox type="checkbox" value={value} onChange={onChange} />
    </>
  );
};

export default CheckBox;
