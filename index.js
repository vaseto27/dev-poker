const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PokerGame = require('./backend/pokerGame');


const app = express();

const startGame = () => {
    const game = new PokerGame();
}

const DEFAULT_PORT = 3000;

app.use(bodyParser.json());


app.listen(DEFAULT_PORT, () => {
    console.log(`Server listening on port ${DEFAULT_PORT}`)
})