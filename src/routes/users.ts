import express from "express";
import usersController from "../controllers/usersController";

const router = express.Router();

router.get("/", usersController.getAll);

router.post("/", usersController.create);

router.post("/signin", usersController.login);

export default router;