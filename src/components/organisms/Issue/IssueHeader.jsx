import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { GreenButton, RedButton } from "../../atoms/Btn";
import InputText from "../../atoms/InputText";
import PageTitle from "../../atoms/PageTitle";
import { CreateModalBody } from "../ModalBody";

Modal.setAppElement("#root");

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContainer = styled(Modal)`
  background-color: white;
  outline: solid 1px;
  margin: 0 auto;
  width: 800px;
  height: 600px;
`;

export function IssueHeader() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <IssueHeaderContainer>
        <PageTitle />
        <InputText type="text" placeholder="Issue名で検索" />
        <GreenButton
          className="CreateIssueModal"
          onClick={() => setIsOpen(true)}
        >
          New
        </GreenButton>
        <ModalContainer isOpen={modalIsOpen}>
          {/* ここにモーダルの中身記述 */}
          <CreateModalBody />
        </ModalContainer>
        <RedButton>Delete</RedButton>
      </IssueHeaderContainer>
    </>
  );
}
