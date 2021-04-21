import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

function AllCheckBox() {
  return (
    <div>
      <InputCheckBox type="checkbox" />
    </div>
  );
}

export default AllCheckBox;
