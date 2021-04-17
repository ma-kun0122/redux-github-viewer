import React, { useState } from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

const CheckBox = ({ onChange, value }) => {
  const [isChecked, toggleChecked] = useState(false);

  return (
    <>
      <InputCheckBox type="checkbox" value={value} onChange={onChange} />
    </>
  );
};

export default CheckBox;
