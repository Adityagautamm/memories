

import React, { useState } from 'react';

import { TextField, Typography, Paper, CardMedia, TextareaAutosize, Button } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/post';

const MomentForm = () => {
    const classes = useStyles();
    const [file, setFile] = useState();
    const [postData, setPostData] = useState({ title: '', location: '', tags: '', selectedFile: '', createdAt: '', description: '' });
    const dispatch = useDispatch();

    function handleChange(e) {
        console.log('prevpostData' + postData);
        setPostData((prevPostData) => { return { ...prevPostData, [e.target.name]: e.target.value } });

    }

    const clear = () => {

        setPostData({ title: '', location: '', tags: '', selectedFile: '', createdAt: '', description: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        clear();
    };

    return (
        <container >
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Paper className={classes.container}>
                    <div className={classes.topForm}>
                        <div>
                            <CardMedia className={classes.image} image={file} />
                        </div>
                        <div className={classes.topRight}>
                            <Typography className={classes.text} variant="h3" >Create a Moment </Typography>
                            <TextField
                                className={classes.textField}

                                required
                                id="title"
                                name="title"
                                label="Title"
                                variant="filled"
                                value={postData.title}
                                onChange={handleChange}

                            />

                            <TextField
                                className={classes.textField}
                                name="location"
                                required
                                id="location"
                                label="Location"
                                variant="filled"
                                onChange={handleChange}
                                value={postData.location}
                            />

                            <TextField
                                className={classes.textField}
                                name="tags"
                                required
                                id="tags"
                                label="Tags"
                                variant="filled"
                                onChange={handleChange}
                                value={postData.tags}
                            />

                            <TextField
                                className={classes.textField}
                                name="createdAt"
                                required
                                id="createdAt"
                                variant="filled"
                                type='date'
                                onChange={handleChange}
                                value={postData.createdAt}
                            />
                            <div className={classes.fileInput}><FileBase type="file" multiple={false} value={postData.selectedFile} onDone={({ base64 }) => { setFile(base64); setPostData({ ...postData, selectedFile: base64 }) }} /></div>
                            {console.log(file)}
                        </div>
                    </div>
                    <div>
                        <TextareaAutosize
                            className={classes.description}
                            cols="40"
                            row="5"
                            required
                            id="description"
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                            value={postData.description}
                        />
                        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                    </div>

                </Paper>
            </form>
        </container>
    );
}
export default MomentForm;
