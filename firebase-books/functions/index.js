const functions = require("firebase-functions")
const express = require("express")
const cors = require('cors');
const books = require('./books-service');

/* Express */
const app1 = express()
app1.use(cors({ origin: true }));

app1.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(books))
});

app1.get('*',(req,res)=>{
    res.sendStatus(404);
})

const api1 = functions.https.onRequest(app1)

module.exports = {
    api1
}