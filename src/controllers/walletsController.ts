import { Request, Response } from "express";
import { Wallet } from "../models/walletModel";

class WalletsController {
    constructor() {

    }

    async getAll(req: Request, res: Response) {
        try {
            const data = await Wallet.find();
            res.status(200).send(data);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const wallet = await Wallet.findOneBy({id: Number(id)});
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
            const { tag, chain, address} = req.body;

            if (!chain || !address) {
                res.status(400).send("Validation failed for the provided data!");
                return;
            }

            const wallet = new Wallet();
            wallet.chain = chain;
            if (tag) wallet.tag = tag;
            wallet.address = address;
            await wallet.save();

            res.status(200).send("Wallet created!");
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new WalletsController();