import { React, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GreenButton, RedButton, WhiteButton } from "../../atoms/Btn";
import { TextInput } from "../../atoms/InputText";
import PageTitle from "../../atoms/PageTitle";
import { Textarea } from "../../atoms/Textarea";

Modal.setAppElement("#root");

function ModalTitleContent() {
  const [outline, setOutline] = useState("");
  const [status, setStatus] = useState("");

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

export function IssueHeader() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [outline, setOutline] = useState("");
  const selector = useSelector((state) => state);
  console.log(selector.issues);
  const [isChecked, toggleChecked] = useState(false);

  // const getVisibleissues = (issues, filter) => {
  //   // https://qiita.com/micropig3402/items/bb5ca76c3b1c5eac2526
  //   if (event.target.value !== "") {
  //     console.log("中身が入りました");
  //     dispatch({
  //       type: "SHOW_COMPLETED",
  //     });
  //     return;
  //   } else {
  //     //中身が空になった時のinitialState全表示
  //     console.log("中身が空になりました");
  //     dispatch({
  //       type: "SHOW_ALL",
  //     });
  //     return;
  //   }
  // };

  // const mapStateToPorops = (state) => {
  //   return { issues: getVisibleTodos(state.issues, state.visibilityFilter) };
  // };

  // const VisibleTodoList = connect(mapStateToPorops)(IssueHeader);

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
        outline,
        status: "open",
        username: "masashi", //userのstateからとってくる
        createDate: today.getFullYear(),
        updateDate: today.getFullYear(),
      },
    });
  };

  //codesandbox.io/s/react-redux-filter-example-u4ftx?from-embed=&file=/src/components/Filter/index.js
  const issueFilter = (event) => {
    console.log(event.target.value);
    if (event.target.value !== "") {
      //
      console.log("中身が入りました");
      dispatch({
        type: "FILTER_ISSUE",
      });
    } else {
      //中身が空になった時のinitialState全表示
      console.log("中身が空になりました");
      dispatch({
        type: "CURRENT_ISSUE",
      });
    }
  };

  // これをonChangeにはめ込む
  //   switch (
  //     filter //filterの内容によって表示するissuesを変えるswitch文という意味
  //   ) {
  //     case VisibilityFilters.SHOW_ALL: //全表示の場合
  //       console.log("ケースSHOW_ALL実行");
  //       return issues;
  //     case VisibilityFilters.SHOW_COMPLETED: //フィルターがかかる場合
  //       console.log("ケースSHOW_COMPLETED実行");
  //       return issues.filter(
  //         (list) => list.includes(event.target.value) !== ""
  //       );
  //   }
  // };

  const inputOutlineText = (e) => {
    setOutline(e.target.value);
  };

  const deleteList = (id) => {
    dispatch({
      type: "DELETE_ISSUE",
      payload: id,
    });
  };

  // const deleteList = (outline) => {
  //   dispatch({
  //     type: "DELETE_ISSUE",
  //     payload: outline,
  //   });
  // };

  return (
    <>
      <IssueHeaderContainer>
        <PageTitle />
        <TextInput
          type="text"
          placeholder="Issue名で検索"
          // onChange={getVisibleissues}
          onChange={issueFilter}
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
                  placeholder="説明を入力してください"
                  id="form2"
                ></ModalTextarea>
              </ModalContent2>

              <ModalFooter>
                <GreenButton
                  onClick={() => {
                    addList();
                    closeModal();
                  }}
                >
                  作成
                </GreenButton>
                <WhiteButton onClick={closeModal}>閉じる</WhiteButton>
              </ModalFooter>
            </ModalContent>
          </ModalContainer>
        </ModalBody>

        <RedButton onClick={() => deleteList(id)}>Delete</RedButton>
      </IssueHeaderContainer>
    </>
  );
}
