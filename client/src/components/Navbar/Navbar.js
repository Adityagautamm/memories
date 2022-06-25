import React, { useState } from 'react';

import { Box, AppBar, Toolbar, IconButton, Menu, Container, Avatar, Tooltip, MenuItem, TextField, Typography, Paper, CardMedia, TextareaAutosize, Button } from '@material-ui/core';
import MenuRounded from '@material-ui/icons/MenuRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from './styles';

const pages = ['Products', 'Pricing', 'Blog'];
const option1 = ['one', 'two', 'three']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const Navbar = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorUser, setAnchorUser] = useState(null);

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
                        <button onClick={handleOpenUserMenu}><AccountCircle /></button>
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
                            {settings.map((page) => (
                                <MenuItem key={page} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </box>

                </Toolbar>
            </Container>
        </AppBar>
    );

}

export default Navbar