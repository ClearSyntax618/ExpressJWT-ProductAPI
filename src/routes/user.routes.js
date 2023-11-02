import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const router = Router();

router.post('/signUp', createUser);

export default router;