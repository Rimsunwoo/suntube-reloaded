import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoCotroller";
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Homes");

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
