import React from "react";
import styled from "styled-components";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

function AllCheckBox({ isAllChecked, onChangeAllCheckbox }) {
  console.log(isAllChecked);
  return (
    <div>
      <InputCheckBox
        type="checkbox"
        onChange={() => {
          onChangeAllCheckbox(!isAllChecked);
        }}
      />
    </div>
  );
}

export default AllCheckBox;
