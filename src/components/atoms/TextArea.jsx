import React from "react";
import styled from "styled-components";

const OutlineInput = styled.textarea`
  height: 200px;
  width: 100%;
`;
function TextArea() {
  return <OutlineInput type="text" placeholder="説明を入力してください" />; //これをhooksでpropsに？
}

export default TextArea;
