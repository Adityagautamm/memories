
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MomentForm from './components/MomentForm/MomentForm';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => (!user ? <Auth /> : <Redirect to="/home" />)} />
                    <Route path="/home" exact component={MomentForm} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
};

export default App;