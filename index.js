const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PokerGame = require('./backend/pokerGame');
const Player = require('./backend/player')


const app = express();
let game;

const startGame = () => {
     game = new PokerGame();
}

startGame();

const DEFAULT_PORT = 3000;

app.use(bodyParser.json());

app.use('/api/start-game', (req, res) => {
    startGame();
    res.send('Game started')
})

app.post('/api/add-player', (req, res) => {
    const {name, balance} = req.body;
    const newPlayer = new Player(name, balance);
    game.addPlayer(newPlayer);
    res.status(200).json({data: newPlayer ,message: 'Player added succesfully'})
})


app.listen(DEFAULT_PORT, () => {
    console.log(`Server listening on port ${DEFAULT_PORT}`)
})