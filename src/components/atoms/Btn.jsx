import React from "react";
import styled from "styled-components";

export const button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: block;
  width: 100%;
  height: 30px;
  width: 70px;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
`;
export const GreenButton = styled(button)`
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
  }
`;

export const RedButton = styled(button)`
  background: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;

export const WhiteButton = styled(button)`
  background: white;
  color: rgb(3, 102, 214);
`;

export function Btn() {
  return <button type="button"></button>;
}
