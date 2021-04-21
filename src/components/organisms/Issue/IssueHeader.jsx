import { React, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GreenButton, RedButton, WhiteButton } from "../../atoms/Btn";
import { TextInput } from "../../atoms/InputText";
import PageTitle from "../../atoms/PageTitle";
import { Textarea } from "../../atoms/Textarea";

Modal.setAppElement("#root");

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//以下、Modalの定義
const ModalBody = styled(Modal)`
  background-color: white;
  border: 1px solid rgb(225, 228, 232);
  outline-style: none;
  border-radius: 6px;
  width: 60%;
  min-width: 400px;
  margin: 40px auto;
  padding: 20px;
`;
const ModalContainer = styled.div`
  margin: 0 auto;
  padding: 0px 40px;
`;
const ModalTitle = styled.h2``;

const ModalContent = styled.div`
  margin-top: 60px;
`;

const ModalContent1 = styled.div``;
const ModalContent2 = styled.div`
  margin-top: 40px;
`;

const ModalTextInput = styled(TextInput)`
  margin: 0px;
  width: 100%;
`;

const ModalTextarea = styled(Textarea)`
  margin: 0px;
  width: 100%;
`;

export const ModalFooter = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;

export function IssueHeader({ filterText, onChangeFilterText }) {
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

  console.log(outlineText);
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
                      setOutline("");
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
