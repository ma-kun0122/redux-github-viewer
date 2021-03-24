import React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
  margin: 8px 16px;
  outline: none;
`

function InputText() {
  return <TextInput type="text" placeholder="Issue名で検索" /> //これをhooksでpropsに？
}

export default InputText
