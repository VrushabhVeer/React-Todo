import React from 'react'
import App from '../App';

const TodoList = ({ title, id, status, handleComplete }) => {
  return (
    <div className='todolist'>
      <p>{title}</p>
      <button className='complte-button' onClick={() => handleComplete(id)}>{status ? 'Inomplete' : 'Complete'}</button>
    </div>
  )
}

export default TodoList;