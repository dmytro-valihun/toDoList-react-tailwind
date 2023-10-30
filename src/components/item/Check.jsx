import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

export default function Check({ isFinished }) {    
  return (
    // <div className={`mr-2 border-2 rounded-lg border-pink-400 w-5 h-5 ${isFinished ? 'bg-pink-400' : ''} flex items-center `}>
    // or DIV below - npm i classnames
        <div className={cn('mr-2 border-2 rounded-lg border-pink-400 w-5 h-5 flex items-center', 
            {
                'bg-pink-400': isFinished
            }
        )}>
        {isFinished && <BsCheck size={24} className='text-gray-700'/>}
    </div>
  )
}