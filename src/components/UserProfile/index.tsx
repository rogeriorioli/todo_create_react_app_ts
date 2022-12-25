import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { ButtonWrapper, UserImage, Userlogin, UserName, UserWrapper } from './style'

export interface Props{
  avatar_url : string | undefined
  login : string | undefined
  name: string  | undefined
}

export default function UserProfile({...data} : Props) {
  const navigate = useNavigate()
  const logout = () =>  {
    localStorage.setItem('userid', '')
    localStorage.setItem('user', '')
    navigate('/')
  }

  return (
      <UserWrapper> 
          <UserImage src={data.avatar_url}/>
          <UserName>{data.name}</UserName>
          <Userlogin>@{data.login}</Userlogin>
          <ButtonWrapper >
          <Button title={'criar tarefa'} color="green" onClick={() => navigate('/task/new')} />
          <Button title='Sair' color="red" onClick={logout} />
          </ButtonWrapper >
      </UserWrapper>
  )
}
