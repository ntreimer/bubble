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

function LandingPage() {
  const [heading, setHeading] = useState("Bubble");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      <Typography>matbub</Typography>
      <RegisterForm />
      <Button color="primary" variant="contained">
        mat but
      </Button>
      <center>
        <h4>Already a Member?</h4>
        <button className="btn btn_sizeSm" onClick={onLogin}>
          Login
        </button>
      </center>
    </div>
  );
}

export default LandingPage;
