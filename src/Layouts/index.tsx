import React, { ReactNode, useEffect, useState } from 'react'
import UserProfile from '../components/UserProfile'
import { Main, Wrapper } from './style'
type Props = {
  children : ReactNode
  avatar? : string 
  username? : string
  name? : string
}
export default function Layouts({ children} : Props) {

  const [user, setUser] = useState<Props>()
  useEffect(() => {
    //@ts-ignore
    const userLocal = JSON.parse(localStorage.getItem('user'))
    setUser(userLocal)
  }, [])
  return (
    <Main>
      <Wrapper>
      <UserProfile
          avatar_url={user?.avatar}
          login={user?.username}
          name={user?.name} />
        {children}
      </Wrapper>
    </Main>
  )
}
