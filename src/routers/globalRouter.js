import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoCotroller";
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Homes");

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
