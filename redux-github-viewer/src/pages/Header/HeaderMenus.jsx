import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBtn = styled.div`
  position: fixed;
  padding: 8px;
  right: 10px;
  cursor: pointer;
  font-family: 'Font Awesome 5 Free';
  content: '\f03a';
  color: white;
`

const Menu = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: rgb(51, 51, 51);
  box-shadow: rgb(51 51 51 / 15%) 1px 1px 4px 1px;
`

//ドロップメニューCSSの記事https://public-constructor.com/html-css-dropdown-menu/

const MenuUL = styled.ul`
  list-style: none;
  outline: none;
  margin: 0;
  padding: 0;
`

const MenuList = styled.li`
  color: black;
  height: 40px;
`

const StyledLink = styled(Link)`
  display: block;
  padding-left: 6px;
  line-height: 40px;
  color: #000000;
  text-decoration: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(3, 102, 214);
  }
`

const HeaderMenus = () => {
  const [isOpen, setIsOpen] = useState(false) //React Hooks
  const menuRef = useRef() //menuを参照するためuseRefを利用してmenuRefを定義

  useEffect(() => {
    isOpen && menuRef.current.focus()
  }, [isOpen]) //isOpenが変更かつtrueになったら(=メニューが開いている状態)munuRefにfocus
  //useEffectの解説記事https://qiita.com/penpenta/items/08ac84ae4991c6625eea

  return (
    <HeaderBtn className="fa fa-bars" onClick={() => setIsOpen(isOpen ? false : true)}>
      {isOpen && (
        <Menu>
          <MenuUL
            onBlur={() => setTimeout(() => setIsOpen(false), 100)} //onBlur解説https://ja.reactjs.org/docs/events.html
            ref={menuRef}
            tabIndex={1}
          >
            <MenuList>
              <StyledLink to="/Top">Top</StyledLink>
            </MenuList>
            <MenuList>
              <StyledLink to="/profile">Your Profile</StyledLink>
            </MenuList>
            <MenuList>
              <StyledLink to="/issue">Issue</StyledLink>
            </MenuList>
            <MenuList>
              <StyledLink to="/pull-request">PullRequest</StyledLink>
            </MenuList>
          </MenuUL>
        </Menu>
      )}

      {/* 条件付きレンダーの公式ドキュメントhttps://ja.reactjs.org/docs/conditional-rendering.html */}
    </HeaderBtn>
  )
}

export default HeaderMenus
