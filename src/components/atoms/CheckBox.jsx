import React, { useState } from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = () => {
  const [isChecked, toggleChecked] = useState(false);

  return (
    <>
      <InputCheckBox type="checkbox" />
    </>
  );
};

export default CheckBox;
