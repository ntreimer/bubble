import { Typography, Button } from '@material-ui/core';
import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <Button
          variant="outlined"
          onClick={() => {
            history.push('/login');
          }}
        >
          Already a member? Log in
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
