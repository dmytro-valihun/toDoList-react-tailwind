import React, { useState } from 'react'
import ToDoItem from '../item/ToDoItem'
import CreateToDo from '../item/CreateToDo'

const data = JSON.parse(localStorage.getItem('tasks')) || [];

export default function Home() {
  const [state, setState] = useState(data)

  const changeToDo = (id) => {
    const copy = [...state]
    const current = copy.find(todo => todo.id === id)
    current.isFinished = !current.isFinished
    setState(copy)
    localStorage.setItem('tasks', JSON.stringify(copy))
  }

  const removeToDo = (id) => {
    const newTasks = ([...state].filter(todo => todo.id !== id))
    setState(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className='text-white w-4/5 mx-auto flex flex-col items-center'>
      <h1 className='font-bold text-center text-2xl mb-10'>To Do App</h1>
      <CreateToDo setState={setState} state={state}/>
      {state.map(todo => <ToDoItem 
      key={todo.id} 
      todo={todo} 
      changeToDo={changeToDo}
      removeToDo={removeToDo}
      />)}
    </div>
  )
}
