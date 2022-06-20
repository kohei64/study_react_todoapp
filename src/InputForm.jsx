import {React,useState} from 'react'

const InputForm = ({tasks,setTasks}) => {

  const [formValue,setFormValue]=useState("");
  const handleChange=(e)=>{
    setFormValue(e.target.value);
  };

  const handleSubmit=(e)=> {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id:tasks.length,
        text:formValue,
      }
    ]);
    console.log(tasks)
    setFormValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={formValue}/>
        <button>add</button>
      </form>
    </div>
  )
}

export default InputForm
