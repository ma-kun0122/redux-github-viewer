import React from 'react'
import styled from 'styled-components'

const InputCheckBox = styled.input`
  margin: 10px;
  outline: none;
`

function CheckBox() {
  return <InputCheckBox type="checkbox" />
}

export default CheckBox
