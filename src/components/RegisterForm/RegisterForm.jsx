import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Typography variant="h4">Register</Typography>
      <br/>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <TextField
        variant="outlined"
        type="text"
        label="Username"
        value={username}
        required
        onChange={(event) => setUsername(event.target.value)}
      />
      <br/>
      <br/>
      <TextField
        variant="outlined"
        type="password"
        label="Password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
      />
      <br/>
      <br/>
      <Button color="primary" variant="contained" onClick={registerUser}>
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
