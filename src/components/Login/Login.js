import { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [loginValue, setLoginValue] = useState({
    login: '',
    password: '',
  });

  const [isEmpty, setIsEmpty] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginData, setLoginData] = useState([]);

  const closingModal = () => {
    props.closeModal();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!loginValue.login.trim() || !loginValue.password.trim()) {
      setIsEmpty(false);
      return;
    }

    setLoginData((prevLoginData) => [...prevLoginData, loginValue]);
    console.log(loginValue);
    props.closeModal();
  };

  const loginHandler = (event) => {
    setLoginValue((prevLoginValue) => {
      const updatedLoginValue = {
        ...prevLoginValue,
        login: event.target.value,
      };

      return updatedLoginValue;
    });
  };

  const passwordHandler = (event) => {
    setLoginValue((prevPassValue) => {
      const updatedPassValue = {
        ...prevPassValue,
        password: event.target.value,
      };

      return updatedPassValue;
    });
  };

  return (
    <div>
      <div className="loginModal">
        <form className="form" onSubmit={submitHandler}>
          <label>Login</label>
          <input
            type="text"
            className="inputLogin"
            value={loginValue.login}
            placeholder="Email"
            style={{
              border:
                !isEmpty && !loginValue.login.trim() ? '1px solid red' : null,
            }}
            onChange={loginHandler}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            style={{
              border:
                !isEmpty && !loginValue.password.trim()
                  ? '1px solid red'
                  : null,
            }}
            onChange={passwordHandler}
          />
          <button className='loginBtn' type="submit">Login</button>
          {isSubmitted &&
            (!loginValue.login.trim() || !loginValue.password.trim()) && (
              <div className="errorMessage">
                Please enter the required fields!
              </div>
            )}
          <button className="close" type="button" onClick={closingModal}>
            X
          </button>
        </form>
      </div>

      {loginData.map((data, index) => {
        return (
          <li key={index}>
            Login : {data.login} , Password: {data.password}
          </li>
        );
      })}
    </div>
  );
};

export default Login;
