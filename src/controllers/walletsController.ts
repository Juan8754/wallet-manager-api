import { Request, Response } from "express";

class WalletsController {
    constructor() {

    }

    consult(req: Request, res: Response) {
        try {
            res.send("Consulted!");
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new WalletsController();