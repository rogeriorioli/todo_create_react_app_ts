import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layouts from '../../Layouts'
import { api } from '../../services/api'
import { Wrapper } from './style'

export default function NewTask() {
  const navigate = useNavigate()
  const [userid, setUserId] = useState();
  const [taskTitle, setTaskTitle] = useState({})
  const [message, setMessage] = useState('')

  useEffect(() => {
    const id = localStorage.getItem('userid')
    //@ts-ignore
    setUserId(id)
  }, [setUserId])


  const getTaskTitle = (e : ChangeEvent<HTMLInputElement>) => {
    setTaskTitle({[e.target.name] : e.target.value})
}

  const createTask = (e : FormEvent) => {
    e.preventDefault()
    api.post('/task/new', {
      ...taskTitle,
      userid : userid
    }).then(sucess =>  {

      setMessage('tarefa cridada com sucesso')
    }).catch(err => console.log(err))
  }
  return (
    <Layouts>
        <Wrapper>
          <h2>Nova Tarefa</h2>
          <form onSubmit={createTask}>
            <Input label="Nome da Tarefa" name="title" onChange={getTaskTitle}/>
            <Button color='#000' title='Criar Tarefa'  type='submit'/> 
      
          </form>
          <Button  title='ver tarefas' color='green' onClick={() => navigate('/tasks')} />
          <p>{message}</p>
        </Wrapper>
    </Layouts>
  )
}
