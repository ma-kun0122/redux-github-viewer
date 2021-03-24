import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderMenus from './HeaderMenus'

//styleの定義
const HeaderContainer = styled.div`
  background-color: #333333;
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 48px;
`
const TitleLogo = styled.h1`
  font-size: 2rem;
  padding: 0px;
`
const HeaderLink = styled.p``

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0px 16px;
`

function Header() {
  return (
    <HeaderContainer>
      <TitleLogo>
        <StyledLink to="/Home"> Github Viwer</StyledLink>
      </TitleLogo>
      <HeaderLink>
        <StyledLink to="/issue">Issue</StyledLink>
      </HeaderLink>
      <HeaderLink>
        <StyledLink to="/pull-request">Pull Request</StyledLink>
      </HeaderLink>
      <HeaderMenus></HeaderMenus>
    </HeaderContainer>
  )
}

export default Header
