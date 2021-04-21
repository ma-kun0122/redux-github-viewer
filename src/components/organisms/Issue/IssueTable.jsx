import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AllCheckBox from "../../atoms/AllCheckBox";
import CheckBox from "../../atoms/CheckBox";

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
  const issues = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  //フィルターされたもののみ都度表示のためlist定義
  const list = issues.filter((issue) => issue.outline.includes(filterText));

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
  function ListExists({ isAllChecked, onChangeAllCheckbox, deleteList }) {
    return list.map((item, index) => (
      <>
        <ListTableRow>
          <CheckBoxCell>
            <CheckBox
              value={index}
              onChange={(e) => {
                console.log("onChange", index, e.target.checked);
                onChangeAllCheckbox;
              }}
              isAllChecked={isAllChecked}
            />
          </CheckBoxCell>
          <IssueOutline>{item.outline}</IssueOutline>
          <TableDataCell>{item.status}</TableDataCell>
          <TableDataCell>{item.username}</TableDataCell>
          <TableDataCell>{item.createDate}</TableDataCell>
          <TableDataCell>{item.updateDate}</TableDataCell>
        </ListTableRow>
      </>
    ));
  }
  //listの中身あるなしで条件分岐
  const showList = list == "" ? <ListNone /> : <ListExists />;

  //チェックボックス全選択のためのuseState
  const [isAllChecked, changeAllCheckbox] = useState(false);
  const onChangeAllCheckbox = () => {
    //ヘッダーのチェックボックスが押されるたび再レンダリング(テーブルのチェックボックスの状態変更)される
    changeAllCheckbox(!isAllChecked); //true(全チェック)⇆false(全オフ)の切り替え
  };

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
