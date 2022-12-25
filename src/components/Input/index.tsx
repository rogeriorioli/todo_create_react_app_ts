import React, { InputHTMLAttributes, MutableRefObject } from 'react'
import { InputWrapper } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label : string,
  ref?: MutableRefObject<HTMLInputElement | null>;
}

export default function Input({label,  ref, ...rest} : InputProps) {
  return (
    <div>
    <label>{label}</label>
    <InputWrapper>
       <input {...rest} />
    </InputWrapper>
    </div>
  )
}
