import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './ForgotYourPassword.module.css';

const ForgotYourPassword = () => {
  const [areaValue, setAreaValue] = useState('');

  const handleAreaChange = (e) => {
    setAreaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server using Axios
    axios
      .post('http://localhost:5000/managers/forgot-password', { areaValue })
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
      <div className={styles['fyp-form-wrapper']}>
      <div className={styles['forgot-password-form']}>
          <div className={styles['fp-welcome-text']}>Forgot Your Password?</div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="forgot-email"
            label="Email"
            variant="standard"
            className={styles['text-field']}
          />
          <TextField
            id="forgot-area"
            label="Explain how you lost your password"
            variant="standard"
            multiline
            rows={4}
            value={areaValue}
            onChange={handleAreaChange}
            className={styles['text-field']}
          />
          <Button type="submit" variant="contained" className={styles['button']}>
            Submit
          </Button>
          <div className={styles['link']}>
            <Link to="/login">Return to home page</Link>
          </div>
        </form>
      </div>
    </div>
    );
};

export default ForgotYourPassword;
