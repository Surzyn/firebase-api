const functions = require("firebase-functions")
const express = require("express")
const cors = require('cors');
const heroSource = require('./peopleService');
const bodyParser = require('body-parser');

var allHeroes = JSON.parse(JSON.stringify(heroSource));

/* Express */
const app = express()
app.use(cors());

app.use(bodyParser.json());

app.get('/hero', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var allData = allHeroes.map(x => {
        return {
            id: x.id,
            superhero: x.superhero,
            publisher: x.publisher
        }
    })
    res.send(JSON.stringify(allData));
});

app.get('/hero/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var hero = allHeroes.find(x => x.id == req.params.id);
    if (hero == null || hero == undefined) {
        res.sendStatus(400);
        return;
    }
    res.send(JSON.stringify(hero));
});

app.post('/hero', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var newName = req.body.superhero;
    if (newName == null || newName == undefined) {
        res.sendStatus(400);
        return;
    }
    var heroIndex = allHeroes.findIndex(x => x.superhero.toLocaleLowerCase() == newName);

    if (heroIndex !== -1) {
        res.sendStatus(409);
        return;
    }
    var id = Math.floor(Math.random() * 1000000)
    var hero = {
        id: id,
        superhero: req.body.superhero,
        publisher: req.body.publisher,
        firstAppearance: req.body.firstAppearance,
        characters: req.body.characters,
        description: req.body.description,
        url: 'http://www.obcasnik.eu/wp-content/uploads/2015/08/fb22.jpg'
    };

    allHeroes.push(hero);

    res.send(JSON.stringify(id));
});

app.delete('/hero/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var id = req.params.id;
    var index = allHeroes.findIndex(x => x.id == id);

    if (index == -1) {
        res.sendStatus(400);
        return;
    }

    allHeroes = allHeroes.filter(x => x.id != id)

    res.sendStatus(200);
});

app.put('/hero/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var id = req.params.id;
    var hero = allHeroes.find(x => x.id == id);
    if (hero == null || hero == undefined || req.body.superhero == '' || req.body.superhero == null) {
        res.sendStatus(400);
        return;
    }

    hero.superhero = req.body.superhero;
    hero.publisher = req.body.publisher;
    hero.firstAppearance = req.body.firstAppearance;
    hero.characters = req.body.characters;

    res.sendStatus(200);
});

app.get('*', (req, res) => {
    res.sendStatus(404);
})

const api = functions.https.onRequest(app)

module.exports = {
    api
}