import React, {ReactNode } from 'react'
import { ItemWrapper } from './style'

interface Props {
  title : string
  data? : string
  id: string
  isdone : boolean
  children : ReactNode
}

export default function Item({isdone, data, title, id, children} : Props) {
    return(
    <ItemWrapper key={id} className={isdone ? 'done' : ''}>
        <span>{data}</span>
        <p>{title}</p>
        {children}
    </ItemWrapper>
  )
}
