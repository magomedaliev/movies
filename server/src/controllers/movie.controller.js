import fs from "fs";
const data = fs.readFileSync("./data.json");

class MovieController {
    getMovies(_, res) {
        res.status(200).json(JSON.parse(data));
    }

    getMovie(req, res) {
        const movie = JSON.parse(data).find(elem => elem.id == req.params.id);
        res.status(200).json(movie || null);
    }
};

export default new MovieController();
