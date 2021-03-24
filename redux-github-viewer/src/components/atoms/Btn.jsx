import React from 'react'
import styled from 'styled-components'

const button = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  min-width: 100px;
  border-radius: 6px;
  color: black;
  font-size: 1rem;
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
`

function Btn() {
  return <button type="button">New</button>
}

export default Btn
