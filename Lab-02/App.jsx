import React, { useState } from 'react';
import "./styles.css";


function TodoInput() {
    const [task,setTask]=useState('');
    const[tasks,setTasks]=useState([]);
    const handleChange=(e)=>
    {
        setTask(e.target.value);
    };
    const handleAdd=()=>
    {
        if(task.trim()!=='')
        {
            setTasks([...tasks,task]);
            alert(`Task added: ${task}`);
            setTask('');
        }

    };
    const handleRemove=(index)=>
    {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };
    return(
        <div>
            <h1>Interactive Task Manager</h1>
            <label>Enter your task:</label>
            <input type="text" placeholder="Enter your task" value={task}  onChange={handleChange}/>
            <br/>
            <br/>
            <button onClick={handleAdd}>Add</button>
            <ol type='i'>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>


                ))}
            </ol>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}
export default TodoInput;
