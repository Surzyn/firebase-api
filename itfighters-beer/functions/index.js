const functions = require("firebase-functions")
const express = require("express")
const cors = require('cors');
const beer = require('./beer-service');

/* Express */
const app1 = express()
app1.use(cors({ origin: true }));

app1.get('/beer', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(beer))
});

app1.get('*', (req, res) => {
    res.sendStatus(404);
})

const api1 = functions.https.onRequest(app1)

module.exports = {
    api1
}