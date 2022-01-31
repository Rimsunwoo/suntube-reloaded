import express from "express";
import { see, edit, upload } from "../controllers/videoCotroller";

const videoRouter = express.Router();

videoRouter.get("/watch", see);
videoRouter.get("/edit", edit);
videoRouter.get("/upload", upload);

export default videoRouter;
