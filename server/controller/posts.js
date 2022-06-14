import mongoose from "mongoose";
import PostModel from "../models/post-model.js";

export const getPosts = async (req, res) => {
    try {

        res.status(200).json('Hello')
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createPosts = async (req, res) => {
    const { title,
        description,
        location,
        tags,
        selectedFile,
        createdAt, } = req.body;

    const uploadeddata = new PostModel({
        title,
        description,
        location,
        tags,
        selectedFile,
        createdAt,
    })

    try {
        await uploadeddata.save();

        res.status(201).json(uploadeddata);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}