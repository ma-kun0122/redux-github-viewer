import React from 'react'
import styled from 'styled-components'
import PageTitle from '../atoms/PageTitle'
import InputText from '../atoms/InputText'
import Btn from '../atoms/Btn'

const IssueHeaderContainer = styled.div`
  text-align: center;
  max-width: 840px;
`

function IssueHeader() {
  return (
    <IssueHeaderContainer>
      <PageTitle />
      <InputText type="text" placeholder="Issue名で検索" />
      <Btn />
      <Btn />
    </IssueHeaderContainer>
  )
}

export default IssueHeader
