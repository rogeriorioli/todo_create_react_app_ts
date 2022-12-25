import React, { ButtonHTMLAttributes } from 'react'
import { ButtonWrapper } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title : string
  color:  string
}
export default function Button({title , color , ...rest} : ButtonProps) {
  return (
    <ButtonWrapper {...rest} bgColor={color}>
      {title}
    </ButtonWrapper>
  )
}
