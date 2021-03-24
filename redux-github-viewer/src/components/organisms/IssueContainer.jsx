import React from 'react'
import styled from 'styled-components'
import IssueHeader from '/Users/hirooka/redux-github-viewer/redux-github-viewer/src/components/molecules/IssueHeader'
import IssueTable from '/Users/hirooka/redux-github-viewer/redux-github-viewer/src/components/molecules/IssueTable'

const issuecontainer = styled.div`
  position: relative;
  display: flex;
`

function IssueContainer() {
  return (
    <issuecontainer>
      <IssueHeader />
      <IssueTable />
    </issuecontainer>
  )
}

export default IssueContainer
