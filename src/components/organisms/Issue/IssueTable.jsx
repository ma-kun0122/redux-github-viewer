import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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

function IssueTable() {
  //storeからstateを取得する場合、useSelector()を使う
  // const [checkedItems, setCheckedItems] = useState({});
  const issues = useSelector((state) => state.issues);
  const dispatch = useDispatch();
  const deleteList = (index) => {
    dispatch({
      type: "DELETE_ISSUE",
      payload: index,
    });
  };
  return (
    <IssueTableContainer>
      <TableHeader>
        <TableRow>
          <CheckBoxCell>
            <CheckBox />
          </CheckBoxCell>

          <IssueHeaderOutline></IssueHeaderOutline>
          <TableHeaderCell>ステータス</TableHeaderCell>
          <TableHeaderCell>作成者</TableHeaderCell>
          <TableHeaderCell>作成日付</TableHeaderCell>
          <TableHeaderCell>更新日付</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((list) => (
          <>
            <TableRow>
              <CheckBoxCell>
                <CheckBox />
              </CheckBoxCell>
              <IssueOutline>{list.outline}</IssueOutline>
              <TableDataCell>{list.status}</TableDataCell>
              <TableDataCell>{list.username}</TableDataCell>
              <TableDataCell>{list.createDate}</TableDataCell>
              <TableDataCell>{list.updateDate}</TableDataCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </IssueTableContainer>
  );
}

export default IssueTable;
