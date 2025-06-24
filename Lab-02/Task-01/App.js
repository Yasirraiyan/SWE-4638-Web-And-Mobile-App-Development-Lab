import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React basics", completed: false },
    { id: 2, title: "Practice useState hook", completed: true },
    { id: 3, title: "Build first React app", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    const title = prompt("Enter new task title:");
    if (title) {
      setTasks([...tasks, { id: Date.now(), title, completed: false }]);
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="task-container">
      <h1>Interactive Task Manager</h1>
      <p>Total Tasks: {tasks.length} | Completed: {completedCount} | Remaining: {tasks.length - completedCount}</p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""} onClick={() => toggleTask(task.id)}>
            {task.title}
            <button onClick={(e) => { e.stopPropagation(); removeTask(task.id); }}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={addTask}>Add Random Task</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
