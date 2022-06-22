
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from '../models/user-model.js'


export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: 'no such user exists' });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" })

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassoword } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        if (password !== confirmPassoword) return res.status(400).body({ message: 'password doesnt match' });

        const hashedPassword = bcrypt.hash(password, 12);

        const result = userModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" })


        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }


}