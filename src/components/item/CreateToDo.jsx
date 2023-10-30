import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import validValue from '../../helpers/validators'

export default function CreateToDo({setState, state}) {
    const [title, setTitle] = useState('')

    const addToDo = (value) => {
        const result = validValue(value)
        if (result) {
        const newTask = {
            id: Date.now(),
            title,
            isFinished: false,
        }
        setState(prev => [newTask, ...prev])
        setTitle('')
        localStorage.setItem('tasks', JSON.stringify([newTask, ...state]))
        }
    }

    return (
        <div className='flex items-center mb-3 rounded-xl bg-gray-700 px-4 w-3/5'
        onKeyUpCapture={(e) => (e.key === 'Enter' && addToDo(title))}>
            <BsPlusCircle className='my-4 text-3xl'/>
            <input 
                type="text" 
                onChange={e => setTitle(e.target.value)}
                value={title}
                className='w-11/12 ml-auto rounded-md text-xl text-black px-2 bg-pink-300 outline-none border-none placeholder:italic placeholder:text-pink-500'
                placeholder='enter to do'
            />
        </div>
    )
}
