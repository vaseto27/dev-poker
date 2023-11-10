const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PokerGame = require('./backend/pokerGame');
const Player = require('./backend/player');
const Deck = require('./backend/deck');


const app = express();
let game;
let deck = new Deck();


const startGame = () => {
     game = new PokerGame();
}

startGame();
deck.initializeDeck();
deck.shuffleDeck();

const DEFAULT_PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client/dist')))

app.get('/api/start-game', (req, res) => {
    startGame();
    res.send('Game started')
})


app.get('/api/deal-hand', (req, res) => {
    const card1 = deck.dealCard();
    const card2 = deck.dealCard();
    res.json({data: [card1, card2], message: 'Card has been dealt'})
})


app.post('/api/add-player', (req, res) => {
    const {name, balance} = req.body;
    const newPlayer = new Player(name, balance);
    game.addPlayer(newPlayer);
    res.status(200).json({data: newPlayer ,message: 'Player added succesfully'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'))
  })


app.listen(DEFAULT_PORT, () => {
    console.log(`Server listening on port ${DEFAULT_PORT}`)
})