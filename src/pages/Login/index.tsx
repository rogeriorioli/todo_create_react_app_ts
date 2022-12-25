import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { api } from '../../services/api'
import { LoginWrapper, Main, Title } from './style'

export default function Login() {
  const navigate = useNavigate()
  
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('')


  const getUserName = (e : ChangeEvent<HTMLInputElement>) => {
      setUser({[e.target.name] : e.target.value})
  }

  const login = async (e : FormEvent) => {
    e.preventDefault()
      await api.post('user', user).then(success => {
        const {data} = success
        localStorage.setItem('userid', data.id)
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/tasks')
      }).catch(err => {
        const {response} = err
        setMessage(response.data.message)
        setTimeout(() =>  {
          setMessage('')
         },3000)
      })
  }
  return (
    <Main>
      <LoginWrapper>
        <Title>ENTRAR OU CADASTAR</Title>
        <p>Entre com seu Usuário do Github </p>
        <form onSubmit={login}>
          <Input 
            label='Usuário'
            type='text'
            onChange={getUserName}
            name='username'
            placeholder='usuário do github'
          />
         <Button title='Entrar' color='#000'/>
        </form>
        {message}
      </LoginWrapper>
    </Main>
  )
}
