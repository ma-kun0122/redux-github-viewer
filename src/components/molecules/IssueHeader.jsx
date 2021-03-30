import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { GreenButton, RedButton } from "../atoms/Btn";
import InputText from "../atoms/InputText";
import PageTitle from "../atoms/PageTitle";

Modal.setAppElement("#root");

export function CreateIssueModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="CreateIssueModal">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function IssueHeader() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* 以下モーダル部分 */}
      <div className="CreateIssueModal">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={modalIsOpen}>
          <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </Modal>
      </div>

      <IssueHeaderContainer>
        <PageTitle />
        <InputText type="text" placeholder="Issue名で検索" />
        <GreenButton>New</GreenButton>
        <RedButton>Delete</RedButton>
      </IssueHeaderContainer>
    </>
  );
}
