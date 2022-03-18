import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import shorterRouter from "./shortenRouter.js"

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(shorterRouter)
export default router;