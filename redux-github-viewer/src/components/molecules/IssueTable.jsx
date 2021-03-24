import React from 'react'
import styled from 'styled-components'
import CheckBox from '/Users/hirooka/redux-github-viewer/redux-github-viewer/src/components/atoms/CheckBox'

const IssueTableContainer = styled.table`
  max-width: 840px;
  border: 1px solid rgb(225, 228, 232);
  border-radius: 2px;
  text-align: center;
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`
const TableHeader = styled.thead``
const TableRow = styled.tr``
const TableHeaderCell = styled.th`
  border-bottom: 1px solid rgb(225, 228, 232);
  min-width: 125px;
`

const TableBody = styled.tbody``
const TableDataCell = styled.td`
  border-bottom: 1px solid rgb(225, 228, 232);
`

function IssueTable() {
  return (
    <IssueTableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <CheckBox />
          </TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>ステータス</TableHeaderCell>
          <TableHeaderCell>作成者</TableHeaderCell>
          <TableHeaderCell>作成日付</TableHeaderCell>
          <TableHeaderCell>更新日付</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <CheckBox />
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>aaa</TableDataCell>
          <TableDataCell>03-24-2021</TableDataCell>
          <TableDataCell>03-24-2021</TableDataCell>
        </TableRow>
        <TableRow>
          <CheckBox />
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
