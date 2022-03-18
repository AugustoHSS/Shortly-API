import { Router } from "express";
import shorterSchema from "../schemas/shortenSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { createShorter } from "../controllers/shorterController.js";

const shorterRouter = Router();
shorterRouter.post('/urls/shorten',validateSchemaMiddleware(shorterSchema), createShorter);

export default shorterRouter;