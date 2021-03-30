import React from 'react'
import styled from 'styled-components'
import Header from '../components/templates/Header/Header'

const PullRequestMessage = styled.h1`
  position: relative;
  text-align: center;
  top: 100px;
`

const PullRequest = () => {
  return (
    <>
      <Header />
      <PullRequestMessage>PullRequest</PullRequestMessage>
    </>
  )
}

export default PullRequest
