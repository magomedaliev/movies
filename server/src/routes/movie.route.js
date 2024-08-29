import { Router } from "express";
const router = new Router();

import movieController from "../controllers/movie.controller.js";

router.get("/", movieController.getMovies);

router.get("/:id", movieController.getMovie);

export default router;
