import { React, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import initialState from "../../../reducks/store/initialState";
import { GreenButton, RedButton, WhiteButton } from "../../atoms/Btn";
import InputText from "../../atoms/InputText";
import PageTitle from "../../atoms/PageTitle";

Modal.setAppElement("#root");

const ModalInput = styled(InputText)`
  height: 300px;
`;

function ModalTitleContent() {
  const [outline, setOutline] = useState("");
  const inputText = (e) => {
    setOutline(e.target.value);
  };
  return (
    <>
      <ModalInput type="text" value={outline} onChange={inputText} />
    </>
  );
}

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//以下、Modalの定義
const Title = styled.h2``;

export const ModalFooter = styled.div`
  display: flex;
`;

export function IssueHeader() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [outline, setOutline] = useState("");
  const selector = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const addList = () => {
    dispatch({
      type: "ADD_ISSUE",
      payload: {
        outline: "",
      },
    });
    setOutline("");
    console.log(initialState);
  };

  return (
    <>
      <IssueHeaderContainer>
        <PageTitle />
        <InputText type="text" placeholder="Issue名で検索" />
        <GreenButton onClick={openModal}>New</GreenButton>

        <Modal isOpen={modalIsOpen}>
          {/* 以下、Modalの中身 */}

          <Title>Issueを追加</Title>

          <p>タイトルを追加</p>
          <input placeholder="タイトルを追加してください"></input>

          <p>説明</p>
          <textarea placeholder="説明を追加してください"></textarea>

          <ModalFooter>
            <GreenButton onClick={addList}>作成</GreenButton>
            <WhiteButton onClick={closeModal}>閉じる</WhiteButton>
          </ModalFooter>
        </Modal>

        <RedButton>Delete</RedButton>
      </IssueHeaderContainer>
    </>
  );
}
