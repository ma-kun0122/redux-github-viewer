import React from 'react'
import styled from 'styled-components'
import CheckBox from '/Users/hirooka/redux-github-viewer/redux-github-viewer/src/components/atoms/CheckBox'

const IssueTableContainer = styled.table`
  table-layout: fixed;
  max-width: 800px;
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  text-align: center;
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
`
const TableHeader = styled.thead``

const TableRow = styled.tr`
  text-align: left;
`
const TableHeaderCell = styled.th`
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
  padding: 8px;
  width: 140px;
`

const CheckBoxCell = styled.th`
  text-align: center;
  border-bottom: 1px solid rgb(225, 228, 232);
  max-width: 30px;
`

const TableBody = styled.tbody``

const TableDataCell = styled.td`
  padding: 12px 4px;
  text-align: left;
  width: 140px;
  max-width: 160px;
  border-bottom: 1px solid rgb(225, 228, 232);
  white-space: normal;
`

export const IssueOutline = styled(TableDataCell)`
  padding: 12px 4px;
  text-align: left;
  width: 140px;
  max-width: 160px;
  border-bottom: 1px solid rgb(225, 228, 232);
  word-wrap: break-word;
`

function IssueTable() {
  return (
    <IssueTableContainer>
      <TableHeader>
        <TableRow>
          <CheckBoxCell>
            <CheckBox />
          </CheckBoxCell>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>ステータス</TableHeaderCell>
          <TableHeaderCell>作成者</TableHeaderCell>
          <TableHeaderCell>作成日付</TableHeaderCell>
          <TableHeaderCell>更新日付</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <CheckBoxCell>
            <CheckBox />
          </CheckBoxCell>
          <IssueOutline>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</IssueOutline>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>03-24-2021</TableDataCell>
          <TableDataCell>03-24-2021</TableDataCell>
        </TableRow>
        <TableRow>
          <CheckBoxCell>
            <CheckBox />
          </CheckBoxCell>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>03-24-2021</TableDataCell>
          <TableDataCell>03-24-2021</TableDataCell>
        </TableRow>
      </TableBody>
    </IssueTableContainer>
  )
}

export default IssueTable
