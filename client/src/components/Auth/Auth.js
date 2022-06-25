import React, { useState } from 'react';
import { CssBaseline, Link, Avatar, TextField, Typography, Paper, Box, Grid, Button, Checkbox, FormControlLabel, Container, Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import PhoneLocked from '@material-ui/icons/ScreenLockLandscape';
import useStyles from './styles';
//import { signup } from '../../api';
import { signin, signup } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log('value:' + e.target.value)
    }


    const switchMode = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        document.getElementById("formId").reset()
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        }
        else { dispatch(signin(formData, history)); }


    }

    return (
        <Container >
            <Box className={classes.container}>
                <Card className={classes.card} >
                    <Box >
                        <Box className={classes.avatarContainer}><Avatar className={classes.avatar}><PhoneLocked /></Avatar> Sign In </Box>
                        <form id='formId' autoComplete='off' onSubmit={handleSubmit}>
                            <Box className={classes.form} >

                                {isSignup && (<>
                                    <TextField

                                        name="firstName"
                                        required
                                        id="firstName"
                                        label="First Name"
                                        variant="filled"
                                        fullWidth
                                        autoFocus
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />

                                    <TextField

                                        name="lastName"
                                        required
                                        id="lastName"
                                        label="LastName"
                                        variant="filled"
                                        fullWidth
                                        onChange={handleChange}
                                    />
                                </>)}

                                <TextField

                                    name="email"
                                    required
                                    id="email"
                                    label="Email"
                                    variant="filled"
                                    fullWidth
                                    onChange={handleChange}
                                />
                                <TextField

                                    name="password"
                                    required
                                    id="password"
                                    label="Password"
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                    onChange={handleChange}
                                />
                                {isSignup && (<>                                <TextField

                                    name="confirmPassword"
                                    required
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                    onChange={handleChange}
                                /></>)}
                            </Box>
                            <Box className={classes.button}>
                                <Button variant="contained" color="secondary" size="large" type="submit"  > {isSignup ? 'Register' : 'Sign IN'} </Button>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Card>

            </Box>

        </Container >

    );
}
export default Auth;