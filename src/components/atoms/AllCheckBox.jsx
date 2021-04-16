import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`;

function AllCheckBox() {
  //   const count = useContext(UserCount);
  //   console.log("Hello");
  return (
    <div>
      <CheckBox />
    </div>
  );
}

export default AllCheckBox;
