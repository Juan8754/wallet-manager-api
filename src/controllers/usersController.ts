import { Request, Response } from "express";
import { User } from "../models/userModel";
import { generateToken } from "../utils/jwt";
import bcrypt from 'bcrypt';


class UsersController {
    constructor() {

    }

    async getAll(req: Request, res: Response) {
        console.log("obtain all users");
        try {
            const data = await User.find();
            res.status(200).send(data);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async create(req: Request, res: Response) {
        try {
            const saltRounds = 10;
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).json({ ok: false, message: 'Validation failed for the provided data!' });
                return;
            }

            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const user = new User();
            user.email = email;
            user.password = hashedPassword;
            await user.save();
            
            res.status(200).json({ ok: false, message: 'User created!' });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).json({ ok: false, message: 'Missing requiered fields: email, password' });
                return;
            }

            const user = await User.findOneBy({email: email});

            if(user) {
                const isPasswordCorrect = await bcrypt.compare(password, user.password.toString());

                if (email === user.email && isPasswordCorrect) {
                    const token = generateToken(String(user.id));
                    res.status(200).json({ message: 'Login successful', token });
                    return;
                }
            }

            res.status(401).json({ ok: false, message: 'Invalid credentials' });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new UsersController();