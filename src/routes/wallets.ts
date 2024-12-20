import express from "express";
import walletsController from "../controllers/walletsController";
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get("/", authenticate, walletsController.getAll);

router.post("/", authenticate, walletsController.create);

router.get("/:id", authenticate, walletsController.getOne);

router.put("/:id", authenticate, walletsController.update);

router.delete("/:id", authenticate, walletsController.delete);

export default router;