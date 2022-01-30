import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoCotroller";
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Homes");

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
