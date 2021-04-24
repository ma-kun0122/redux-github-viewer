import React from "react";
import styled from "styled-components";

export const TextInput = styled.input`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  margin: 0px 12px;
  padding: 8px 6px;
  outline: none;
  width: 100%;
`;

function InputText({ value, index }) {
  return (
    <TextInput
      type="text"
      placeholder="Issue名で検索"
      value={value}
      index={index}
    />
  ); //これをhooksでpropsに？
}
