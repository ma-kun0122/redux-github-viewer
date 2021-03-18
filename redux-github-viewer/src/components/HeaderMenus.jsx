import React, { useState } from "react";
import styled from "styled-components"

const HeaderBtn=styled.div`
position: fixed;
top: 30px;
right: 10px;
height: 30px;
width: 30px;

`

const Bar=styled.div`
margin-top: 6px;
width: 30px;
height: 5px;
background-color:white;
`

const HeaderMenus = () => {
  
  return (
    <HeaderBtn>
        <Bar/>
        <Bar/>
        <Bar/>
    </HeaderBtn>
  )
}

export default HeaderMenus;