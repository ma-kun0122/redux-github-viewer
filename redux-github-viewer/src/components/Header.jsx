import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components"
import HeaderMenus from "./HeaderMenus"


//styleの定義
const HeaderContainer=styled.div`
background-color:#333333;
display:flex;
margin:0;
`
const TitleLogo=styled.h1`
font-size: 2rem;
padding: 10px;
`
const HeaderLink=styled.p`
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`



function Header(){  
    return (
       <HeaderContainer>
            <TitleLogo><StyledLink to="/Home"> Github Viwer</StyledLink></TitleLogo>
            <HeaderLink><StyledLink to="/issue">Issue</StyledLink></HeaderLink>
            <HeaderLink><StyledLink to="/pull-request">PullRequest</StyledLink></HeaderLink>
            <HeaderMenus></HeaderMenus>
        </HeaderContainer>        
    );
};


export default Header;
