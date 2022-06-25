
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MomentForm from './components/MomentForm/MomentForm';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/auth" exact component={MomentForm} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;