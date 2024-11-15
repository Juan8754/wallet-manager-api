import express from "express";
import usersController from "../controllers/walletsController";

const router = express.Router();

router.get("/", usersController.consult);

router.post("/", usersController.consult);

router.get("/:id", usersController.consult);

router.put("/:id", usersController.consult);

router.delete("/:id", usersController.consult);

export default router;