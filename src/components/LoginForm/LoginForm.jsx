import { TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <Typography htmlFor="username">
          <TextField
            variant="outlined"
            type="text"
            label="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Typography>
      </div>
      <br/>
      <div>
        <Typography htmlFor="password">
          
          <TextField
            variant="outlined"
            type="password"
            label="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Typography>
      </div>
      <br/>
      <div>
        <Button variant="contained" color="primary" onClick={login}>Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
