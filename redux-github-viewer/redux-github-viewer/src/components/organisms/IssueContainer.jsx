import React from 'react'
import styled from 'styled-components'
import IssueHeader from '/Users/hirooka/redux-github-viewer/redux-github-viewer/src/components/molecules/IssueHeader'
import IssueTable from '/Users/hirooka/redux-github-viewer/redux-github-viewer/src/components/molecules/IssueTable'
const IssueParents = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 50px;
`

function IssueContainer() {
  return (
    <IssueParents>
      <IssueHeader />
      <IssueTable />
    </IssueParents>
  )
}

export default IssueContainer
