import { React, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GreenButton, RedButton, WhiteButton } from "../../atoms/Btn";
import { TextInput } from "../../atoms/InputText";
import {
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalContent1,
  ModalContent2,
  ModalFooter,
  ModalTextarea,
  ModalTextInput,
  ModalTitle,
} from "../../atoms/Modal";
import PageTitle from "../../atoms/PageTitle";

Modal.setAppElement("#root");

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function IssueHeader({ filterText, onChangeFilterText }) {
  //リスト追加時のモーダルのstate定義
  const [modalIsOpen, setIsOpen] = useState(false);
  const [outlineText, setOutline] = useState("");
  const [descriptionText, setDescription] = useState("");
  // const [valueText, inputValueText] = useState("");
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const addList = () => {
    var today = new Date();
    var index = selector.issues.length;
    dispatch({
      type: "ADD_ISSUE",
      payload: {
        id: index,
        outline: outlineText,
        description: descriptionText,
        status: "open",
        username: "masashi", //userのstateからとってくる
        createDate: today.getFullYear(),
        updateDate: today.getFullYear(),
      },
    });
  };

  const inputOutlineText = (e) => {
    setOutline(e.target.value);
  };

  const inputDescriptionText = (e) => {
    setDescription(e.target.value);
  };

  const deleteList = (id) => {
    dispatch({
      type: "DELETE_ISSUE",
      payload: id,
    });
  };

  return (
    <>
      <IssueHeaderContainer>
        <PageTitle />
        <TextInput
          type="text"
          placeholder="Issue名で検索"
          value={filterText}
          onChange={onChangeFilterText}
        />
        <GreenButton onClick={openModal}>New</GreenButton>

        <ModalBody isOpen={modalIsOpen}>
          {/* 以下、Modalの中身 */}
          <ModalContainer>
            <ModalTitle>Issueを追加</ModalTitle>
            <ModalContent>
              <ModalContent1>
                <p>タイトルを追加</p>
                <ModalTextInput
                  type="text"
                  onChange={inputOutlineText}
                  placeholder="タイトルを追加してください"
                ></ModalTextInput>
              </ModalContent1>
              <ModalContent2>
                <p>説明</p>
                <ModalTextarea
                  onChange={inputDescriptionText}
                  placeholder="説明を入力してください"
                ></ModalTextarea>
              </ModalContent2>

              <ModalFooter>
                <GreenButton
                  onClick={() => {
                    //概要の中身ある時ない時処理;
                    if (outlineText !== "") {
                      addList();
                      closeModal();
                      // setOutline("");
                    } else {
                      openModal();
                    }
                  }}
                >
                  作成
                </GreenButton>
                <WhiteButton onClick={closeModal}>閉じる</WhiteButton>
              </ModalFooter>
            </ModalContent>
          </ModalContainer>
        </ModalBody>

        <RedButton
          onClick={() => {
            deleteList(selector.issues.id);
          }}
        >
          Delete
        </RedButton>
      </IssueHeaderContainer>
    </>
  );
}
