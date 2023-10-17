import { useState } from 'react';
import Form from './components/Form';
import OpenedTasks from './components/OpenedTasks';

function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const removeItem = (index) => {
    const updatedTask = task.filter((item, i) => i !== index);
    setTask(updatedTask);
  };

  const clearTasks = () => {
    setTask([]);
  };

  return (
    <div>
      <Form addTask={addTask} clearTasks={clearTasks} />

      <OpenedTasks task={task} removeItem={removeItem} />
    </div>
  );
}

export default App;
