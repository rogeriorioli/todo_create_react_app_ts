import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children : ReactNode
}

export default function Auth({children} : Props) {
  const navigate = useNavigate()
  useEffect(() => {
    const userid = localStorage.getItem('userid')
    if(!userid) {
      navigate('/')
    }
  },[navigate])
  return (
    <div>{children}</div>
  )
}
