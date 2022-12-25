import React, { useEffect, useState } from 'react'
import Item from '../../components/Item'
import { api } from '../../services/api'
import { TaskWrraper } from './style'
import { MdDelete, MdCheck } from 'react-icons/md'
import Layouts from '../../Layouts'



type User = {
  name: string
  avatar: string
  username: string
  taks?: []
}

type Task = {
  id: string
  title: string
  isdone: boolean
  created_at: Date
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  const getTASKS = async () => {
    await api.get<User>("user/tasks", {
      headers: {
        userid: localStorage.getItem('userid')
      }
    }).then(response => {
      const { data } = response
      setTasks(!data.taks ? [] : data.taks)
    })
  }

  const done = async (id: string) => {
    await api.put(`task/edit/${id}`, {
      isdone: true
    }).then(success => {
      const { data } = success
      getTASKS()
    })
  }
  const deleteTask = async (id: string) => {
    await api.delete(`task/delete/${id}`).then(() => {
      const task = tasks.filter((task) => task.id !== id)
      setTasks(task)

    })
  }

  useEffect(() => {
    getTASKS()
  }, [])

  return (
    <Layouts>

      <TaskWrraper>
        <h2>Minhas Tarefas</h2>
        {tasks.length === 0 ?
          (<p>nemhuma tarefa cadastrada</p>)
          : tasks.map((task, index) => {
            return (
              <Item
                key={task.id}
                data={new Date(task.created_at).toLocaleString('pt-br').slice(0, 10).replaceAll('-', '/')}
                isdone={task.isdone.valueOf()}
                title={task.title} id={task.id} >
                <div className='button-wrapper'>
                  <button onClick={() => deleteTask(task.id)}><MdDelete size={22} color="red" /></button>
                  {!task.isdone && (
                    <button onClick={() => done(task.id)}><MdCheck size={22} color="blue" /></button>
                  ) }
                </div>
              </Item>
            )
          })
        }
      </TaskWrraper>
    </Layouts>
  )
}
