import React from 'react';
import './OpenedTasks.css';

const OpenedTasks = (props) => {
  return (
    <div className="container">
      <ul className="task-list">
        {props.task.map((tasks, index) => (
          <li key={index} className="task-item">
            {tasks}
            <div className="task-buttons">
              <button
                className="remove-button"
                onClick={() => props.removeItem(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenedTasks;
