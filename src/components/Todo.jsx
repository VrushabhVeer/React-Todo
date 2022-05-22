import React from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';

const Todo = () => {
  const [data, setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true)

  const handleadd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid()
    }
    setData([...data, payload]);
  };

  const handleDelete = id => {};

  const handleComplete = id => {
    const updatedTodo = data.map(item => item.id === id ?
      { ...item, status: !item.status } : item
    );
    setData(updatedTodo);
  };

  return (
    <div>
      <TodoInput onClick={handleadd}></TodoInput>
      {data.filter((item) => (showAll ? true : !item.status))
        .map((item) => (
          <TodoList handleDelete={handleDelete}
            handleComplete={handleComplete}
            key={item.id}
            {...item}>
          </TodoList>
        ))}

      <button className='show-Button' onClick={() => setShowAll(!showAll)}>
        {showAll ? "SHOW INCOMPLETED TO'DOS" : "SHOW ALL TODO'S"}
      </button>
    </div>
  )
}

export default Todo;
