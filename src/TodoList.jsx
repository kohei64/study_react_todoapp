import React from 'react'

const TodoList = ({tasks,setTasks}) => {

  const handleDelete=(id)=>{
    setTasks(tasks.filter(task=>task.id !== id))
  };

  return (
    <div>
      <ul>
        {tasks.map((task,index) => (
          <div>
            <li key={index}>{task.text}</li>
            <button onClick={()=>handleDelete(task.id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
