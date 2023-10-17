import { useState } from 'react';
import Form from './components/Form';
import OpenedTasks from './components/OpenedTasks';

function App() {
  const [task, setTask] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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

  const startingApp = () => {
    setIsStarted(true);

    // Show the welcome message after 0 seconds (immediately)
    setShowWelcome(true);

    // Hide the welcome message after 3 seconds
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  };

  return (
    <div>
      {isStarted && (
        <div>
          {showWelcome && <div className="welcomeMessage">Welcome</div>}
          <Form addTask={addTask} clearTasks={clearTasks} />
          <OpenedTasks task={task} removeItem={removeItem} />
        </div>
      )}
      {!isStarted && (
        <div className="startingApp" onClick={startingApp}>
          Start using the app
        </div>
      )}
    </div>
  );
}

export default App;
