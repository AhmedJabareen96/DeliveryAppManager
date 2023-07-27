import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";

const Login = () => {
    const { username, setUsername, setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleLoginButton() {
        axios.post("http://localhost:5000/managers/loginEmail", {
            email: username,
            password: password
        })
    .then(() => {
        console.log(`Hello ${username}`);
        setIsLoggedIn(true); // Make sure this sets the isLoggedIn state correctly in the UserContext
        localStorage.setItem("isLoggedIn", "true"); // Store the value as a string
        navigate('/');
    })
    .catch(err => {
        console.log(err);
        setErrorMessage('Invalid email/password');
    });
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <div className={styles['login-form-wrapper']}>
            <div className={styles['login-form']}>
                <div className={styles['welcome-text']}>Welcome to Hourly Management Console!</div>
                <TextField
                    id="loginm-username"
                    label="Email"
                    variant="standard"
                    className={styles['text-field']}
                    onChange={handleUsernameChange}
                />
                <TextField
                    id="loginm-password"
                    label="Password"
                    variant="standard"
                    type="password"
                    className={styles['password-field']}
                    onChange={handlePasswordChange}
                />
                <Button variant="contained" className={styles['button']} onClick={handleLoginButton}>
                    Login
                </Button>
                {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
                <p>
                    Forgot your password? <Link to="/forgot-password">Reset here</Link>
                </p>
            </div>
        </div>
        );
};

export default Login;
