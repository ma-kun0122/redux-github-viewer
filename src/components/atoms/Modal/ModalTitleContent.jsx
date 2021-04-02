import React from "react";
import styled from "styled-components";
import InputText from "../InputText";

const ModalInput = styled(InputText)`
  height: 300px;
`;

function ModalTitleContent() {
  return (
    <>
      <ModalInput type="text" placeholder="タイトルを入力してください" />
    </>
  );
}

export default ModalTitleContent;
