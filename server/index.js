import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import movieRouter from "./src/routes/movie.route.js"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/poster", express.static(join(__dirname, "src", "posters")));

app.use("/movie", movieRouter);

app.listen(PORT, () => {
    console.log(`⚡️[bootup]: Server is running at port: ${PORT}`);
});
