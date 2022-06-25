import React, { useState, useEffect } from 'react';

import { Box, AppBar, Toolbar, IconButton, Menu, Container, Avatar, Tooltip, MenuItem, TextField, Typography, Paper, CardMedia, TextareaAutosize, Button } from '@material-ui/core';
import MenuRounded from '@material-ui/icons/MenuRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from './styles';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';



const pages = ['Products', 'Pricing', 'Blog'];
const option1 = ['one', 'two', 'three']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const Navbar = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorUser, setAnchorUser] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        console.log(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenOptionMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        console.log(event.currentTarget);
    };


    const handleCloseOptionMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
        console.log(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <box className={classes.right}>
                        <box>
                            <button onClick={handleOpenNavMenu}><MenuRounded /></button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                getContentAnchorEl={null}

                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}

                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </box>
                        <box >
                            <button className={classes.menuHeaders} onClick={handleOpenOptionMenu}>Highlights</button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                getContentAnchorEl={null}

                                open={Boolean(anchorElUser)}
                                onClose={handleCloseOptionMenu}

                            >
                                {option1.map((page) => (
                                    <MenuItem className={classes.menuItems} key={page} onClick={handleCloseOptionMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </box>
                    </box>
                    <box className={classes.left} >
                        <button onClick={handleOpenUserMenu}>{user?.result?.name}<AccountCircle /></button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}

                            open={Boolean(anchorUser)}
                            onClose={handleCloseUserMenu}

                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <button textAlign="center" onClick={logout}>Logout</button>
                            </MenuItem>

                        </Menu>
                    </box>

                </Toolbar>
            </Container>
        </AppBar>
    );

}

export default Navbar