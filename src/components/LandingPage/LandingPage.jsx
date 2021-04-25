import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// MATERIAL UI

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

function LandingPage() {
  const history = useHistory();

  const signUp = (event) => {
    history.push("/register");
  };

  return (
    <div className="container">
      <Typography variant="h2">Log In</Typography>
      <LoginForm />
      <center>
        <h4>Not a member?</h4>
        <Button color="primary" variant="contained" onClick={signUp}>
          Sign Up
        </Button>
      </center>
    </div>
  );
}

export default LandingPage;
