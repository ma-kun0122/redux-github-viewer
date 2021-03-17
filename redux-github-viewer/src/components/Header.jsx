import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components"


//https://mottox2.com/posts/133

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

const MenuBtn=styled.div`
position: fixed;
top: 10px;
right: 10px;
height: 60px;
width: 60px;
vertical-align: center;
background-color: #3584bb;
`


function Header(){  
    return (
       <HeaderContainer>
            <TitleLogo><StyledLink to="/Home"> Github Viwer</StyledLink></TitleLogo>
            <HeaderLink><StyledLink to="/issue">Issue</StyledLink></HeaderLink>
            <HeaderLink><StyledLink to="/pull-request">PullRequest</StyledLink></HeaderLink>
            <MenuBtn></MenuBtn>
        </HeaderContainer>        
    );
};


export default Header;
