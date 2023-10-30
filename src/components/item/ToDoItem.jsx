import React from 'react'
import Check from './Check'
import cn from 'classnames'
import RemoveBtn from './RemoveBtn'


export default function ToDoItem({todo, changeToDo, removeToDo}) {
  return (
    <div  className='flex items-center mb-3 rounded-xl bg-gray-700 px-4 py-3 w-3/5'> 
      <div onClick={() => changeToDo(todo.id)} className='flex items-center'>
        <Check isFinished={todo.isFinished}/>
        <div className={cn({'line-through': todo.isFinished})}>{todo.title}</div>
      </div>   
      <button onClick={() => removeToDo(todo.id)} className='ml-auto'><RemoveBtn /></button>
    </div>
  )
}