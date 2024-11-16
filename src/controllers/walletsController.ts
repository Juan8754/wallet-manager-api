import { Request, Response } from "express";
import { Wallet } from "../models/walletModel";
import { User } from "../models/userModel";

class WalletsController {
    constructor() {

    }

    async getAll(req: Request, res: Response) {
        try {
            const { user_id } = req.params;

            const data = await Wallet.findBy({user: {id: Number(user_id)}});
            res.status(200).send(data);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id, user_id } = req.params;

            const wallet = await Wallet.findOneBy({id: Number(id), user: {id: Number(user_id)}});
            if (!wallet) {
                res.status(404).send("Wallet not found");
            } else {
                res.status(200).send(wallet);
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { user_id } = req.params;
            const { tag, chain, address } = req.body;

            if (!chain || !address) {
                res.status(400).json({ ok: false, message: 'Validation failed for the provided data!' })
                return;
            }

            const user = await User.findOneBy({id: Number(user_id)});

            if (user) {
                const wallet = new Wallet();
                wallet.chain = chain;
                if (tag) wallet.tag = tag;
                wallet.address = address;
                wallet.user = user;
                await wallet.save();

                res.status(200).json({ ok: true, message: 'Wallet created!' });
            } else {
                res.status(400).json({ ok: false, message: 'Validation failed for the provided data!' })
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id, user_id } = req.params;

            const wallet = await Wallet.findOneBy({id: Number(id), user: {id: Number(user_id)}});
            if (!wallet) {
                res.status(404).send("Wallet not found");
            } else {
                await wallet.remove();
                res.status(200).send("Wallet deleted!");
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id, user_id } = req.params;
            const { tag, chain, address } = req.body;

            const wallet = await Wallet.findOneBy({id: Number(id), user: {id: Number(user_id)}});
            if (!wallet) {
                res.status(404).send("Wallet not found");
            } else {
                if (tag) wallet.tag = tag;
                if (chain) wallet.chain = chain;
                if (address) wallet.address = address;
                await wallet.save();
                res.status(200).send("Wallet updated!");
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new WalletsController();