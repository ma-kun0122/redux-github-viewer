import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import initialState from "../../../reducks/store/initialState";
import AllCheckBox from "../../atoms/AllCheckBox";
import { GreenButton, WhiteButton } from "../../atoms/Btn";
import CheckBox from "../../atoms/CheckBox";
import {
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalContent1,
  ModalContent2,
  ModalFooter,
  ModalOption,
  ModalSelect,
  ModalTextarea,
  ModalTextInput,
  ModalTitle,
} from "../../atoms/Modal";

const IssueTableContainer = styled.table`
  table-layout: fixed;
  max-width: 800px;
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  text-align: center;
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
`;
const TableHeader = styled.thead``;

const TableRow = styled.tr`
  text-align: left;
`;

const ListTableRow = styled.tr`
  text-align: left;
  &:hover {
    cursor: pointer;
    background-color: rgba(198, 218, 230, 0.25);
  }
`;

const TableHeaderCell = styled.th`
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
  padding: 8px;
  width: 140px;
`;

export const IssueHeaderOutline = styled(TableHeaderCell)``;

const CheckBoxCell = styled.th`
  text-align: center;
  border-bottom: 1px solid rgb(225, 228, 232);
  max-width: 30px;
`;

const TableBody = styled.tbody``;

const TableDataCell = styled.td`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
  white-space: normal;
`;

export const IssueOutline = styled(TableDataCell)`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
  word-wrap: break-word;
`;

function IssueTable({ filterText }) {
  const dispatch = useDispatch();

  //フィルターされたもののみ都度表示のためlist定義
  const issues = useSelector((state) => state.issues);
  const list = issues.filter((issue) => issue.outline.includes(filterText));

  console.log(issues[1].outline);

  function ListNone() {
    return (
      <>
        <TableRow>
          <CheckBoxCell>
            <p>データがありません</p>
          </CheckBoxCell>
          <IssueOutline></IssueOutline>
          <TableDataCell></TableDataCell>
          <TableDataCell></TableDataCell>
          <TableDataCell></TableDataCell>
          <TableDataCell></TableDataCell>
        </TableRow>
      </>
    );
  }
  function ListExists() {
    const [isChecked, toggleChecked] = useState(false);
    //リスト追加時のモーダルのstate定義
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [outlineText, setOutline] = useState("");
    const [descriptionText, setDescription] = useState("");
    const profile = useSelector((state) => state.issues);
    const dispatch = useDispatch();

    const [todos, setTodo] = useState(initialState);

    function openModal() {
      setEditModalIsOpen(true);
    }
    function closeModal() {
      setEditModalIsOpen(false);
    }

    const inputOutlineText = (e) => {
      setOutline(e.target.value);
    };

    const inputDescriptionText = (e) => {
      setDescription(e.target.value);
    };
    const issues = useSelector((state) => state.issues);
    const stopModalEvent = (e) => {
      e.stopPropagation();
    };

    return list.map((item, index) => (
      <>
        <ListTableRow
          onClick={() => {
            openModal();
          }}
        >
          <CheckBoxCell>
            <CheckBox
              key={index}
              onChange={(e) => {
                console.log("onChange", index, e.target.checked);
                onChangeAllCheckbox;
              }}
              isAllChecked={isAllChecked}
              checked={isChecked}
              onClick={stopModalEvent}
            />
          </CheckBoxCell>
          <IssueOutline>{item.outline}</IssueOutline>
          <TableDataCell>{item.status}</TableDataCell>
          <TableDataCell>{item.username}</TableDataCell>
          <TableDataCell>{item.createDate}</TableDataCell>
          <TableDataCell>{item.updateDate}</TableDataCell>
        </ListTableRow>

        <ModalBody isOpen={editModalIsOpen}>
          {/* 以下、更新Modalの中身 */}
          <ModalContainer>
            <ModalTitle>Issueを追加</ModalTitle>
            <ModalContent>
              <ModalContent1>
                <p>タイトルを追加</p>
                <ModalTextInput
                  value={issues[index].outline}
                  onChange={inputOutlineText}
                  placeholder="タイトルを追加してください"
                ></ModalTextInput>
              </ModalContent1>
              <ModalContent2>
                <p>説明</p>
                <ModalTextarea
                  value={issues[index].description}
                  onChange={inputDescriptionText}
                  placeholder="説明を入力してください"
                ></ModalTextarea>
              </ModalContent2>
              <p>ステータス</p>
              <ModalSelect>
                <ModalOption>open</ModalOption>
                <ModalOption>close</ModalOption>
              </ModalSelect>

              <ModalFooter>
                <GreenButton
                  onClick={() => {
                    //概要の中身ある時ない時処理;
                    if (outlineText !== "") {
                      // addList();これを更新のdispatchにする
                      // updateList();
                      closeModal();
                    } else {
                      openModal();
                    }
                  }}
                >
                  更新
                </GreenButton>
                <WhiteButton onClick={closeModal}>閉じる</WhiteButton>
              </ModalFooter>
            </ModalContent>
          </ModalContainer>
        </ModalBody>
      </>
    ));
  }

  const [isAllChecked, changeAllCheckbox] = useState(false);
  const onChangeAllCheckbox = () => {
    //ヘッダーのチェックボックスが押されるたび再レンダリング(テーブルのチェックボックスの状態変更)される
    changeAllCheckbox(!isAllChecked); //true(全チェック)⇆false(全オフ)の切り替え
  };
  //listの中身あるなしで条件分岐
  const showList =
    list == "" ? (
      <ListNone />
    ) : (
      <ListExists
        isAllChecked={isAllChecked}
        onChangeAllCheckbox={onChangeAllCheckbox}
      />
    );

  //チェックボックス全選択のためのuseState

  return (
    <IssueTableContainer>
      <TableHeader>
        <TableRow>
          <CheckBoxCell>
            <AllCheckBox
              isAllChecked={isAllChecked}
              onChangeAllCheckbox={onChangeAllCheckbox}
            />
          </CheckBoxCell>

          <IssueHeaderOutline></IssueHeaderOutline>
          <TableHeaderCell>ステータス</TableHeaderCell>
          <TableHeaderCell>作成者</TableHeaderCell>
          <TableHeaderCell>作成日付</TableHeaderCell>
          <TableHeaderCell>更新日付</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{showList}</TableBody>
    </IssueTableContainer>
  );
}

export default IssueTable;
