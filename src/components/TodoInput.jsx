import React from 'react'

const TodoInput = ({ onClick }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div>
      <input
        className='input'
        placeholder='Add a todo here...'
        value={title}
        onChange={(e) => setTitle(e.target.value)
        }
      />
      <button className='add-Button' onClick={() => onClick(title, setTitle(""))}>+ ADD</button>
    </div>
  )
}

export default TodoInput;