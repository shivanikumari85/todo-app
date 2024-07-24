
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setToDoList([...toDoList, newTask]); 
  };

const deleteTask = (taskName) =>{
  setToDoList(toDoList.filter((task) => task!== taskName));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => (
          <div>
            <h1>{task}</h1>
            <button onClick={() =>deleteTask(task)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
