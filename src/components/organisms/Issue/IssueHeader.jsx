import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { GreenButton, RedButton, WhiteButton } from "../../atoms/Btn";
import InputText from "../../atoms/InputText";
import PageTitle from "../../atoms/PageTitle";
import ModalOutline from "../../molecules/Modal/ModalOutline";
import ModalTitle from "../../molecules/Modal/ModalTitle";

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

export const ModalFooter = styled.div`
  display: flex;
`;

export function IssueHeader() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <IssueHeaderContainer>
        <PageTitle />
        <InputText type="text" placeholder="Issue名で検索" />
        <GreenButton onClick={openModal}>New</GreenButton>
        <Modal isOpen={modalIsOpen}>
          <ModalTitle />
          <ModalOutline />
          <ModalFooter>
            <GreenButton>作成</GreenButton>
            <WhiteButton onClick={closeModal}>閉じる</WhiteButton>
          </ModalFooter>
        </Modal>
        <RedButton>Delete</RedButton>
      </IssueHeaderContainer>
    </>
  );
}
