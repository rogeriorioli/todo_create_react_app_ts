import React from 'react'
import { Overlay } from './style'


type ModalProps = {
  close : () => void 
  action : () => void
  title : string
  description : string
}
export default function Modal() {
  return (
    <Overlay>Modal</Overlay>
  )
}
