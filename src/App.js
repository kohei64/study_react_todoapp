import {React,useState} from 'react';
import TodoList from './TodoList'
import InputForm from './InputForm'

function App() {

  const [tasks,setTasks]=useState([]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList tasks={tasks} setTasks={setTasks}/>
      <InputForm tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
