import { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [input, setInput] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  const inputHandler = (event) => {
    setInput(event.target.value);
    setSubmitted(false);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      props.addTask(input);
      setInput('');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <div className="form-container" onSubmit={formHandler}>
        <form className="form">
          <input
            type="text"
            placeholder="Enter task"
            value={input}
            className="form-input"
            onChange={inputHandler}
            style={{
              backgroundColor: isSubmitted ? 'red' : '#fff',
            }}
          />
          {isSubmitted && (
            <div className="error-message">Field cannot be empty!</div>
          )}
          <div>
            <button className="form-button" type="submit">
              Add task
            </button>
            <button className="clear" type="button" onClick={props.clearTasks}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
