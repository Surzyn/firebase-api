const functions = require('firebase-functions');
const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const moviesService = require('./movies');

var allMovies = JSON.parse(JSON.stringify(moviesService));

const app = express()
app.use(cors());
app.use(bodyParser.json());

app.get('/movie', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var allData = allMovies.map(x => {
        return {
            id: x.id,
            title: x.title,
            year: x.year,
            rate: x.rate,
            imgSrc: x.imgSrc
        }
    })
    res.send(JSON.stringify(allData));
});

app.get('/movie/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var movie = allMovies.find(x => x.id == req.params.id);
    if (movie == null || movie == undefined) {
        res.sendStatus(400);
        return;
    }
    res.send(JSON.stringify(movie));
});

app.delete('/movie/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var id = req.params.id;
    var index = allMovies.findIndex(x => x.id == id);

    if (index == -1) {
        res.sendStatus(400);
        return;
    }

    allMovies = allMovies.filter(x => x.id != id)
    res.sendStatus(200);
});

app.post('/movie', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var newName = req.body.title;
    if (newName == null || newName == undefined) {
        res.sendStatus(400);
        return;
    }
    var movieIndex = allMovies.findIndex(x => x.title.toLocaleLowerCase() == newName);

    if (movieIndex !== -1) {
        res.sendStatus(409);
        return;
    }
    var id = Math.floor(Math.random() * 1000000);
    var x = req.body;
    var movie = {
        id: id,
        title: x.title,
        year: x.year,
        rate: x.rate,
        imgSrc: x.imgSrc,
        cast: x.cast,
        genres: x.genres,
        description: x.description
    };

    allMovies.push(movie);

    res.send(JSON.stringify(id));
});

app.put('/movie/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var id = req.params.id;
    var movie = allMovies.find(x => x.id == id);
    if (movie == null || movie == undefined || req.body.title == '' || req.body.title == null) {
        res.sendStatus(400);
        return;
    }

    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.rate = req.body.rate;
    movie.imgSrc = req.body.imgSrc;
    movie.cast = req.body.cast;
    movie.genres = req.body.genres;
    movie.description = req.body.description;

    res.sendStatus(200);
});

app.get('*', (req, res) => {
    res.sendStatus(404);
})

const api = functions.https.onRequest(app)
module.exports = {
    api
}