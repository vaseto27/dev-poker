const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Table = require('./backend/table')


const app = express();

const DEFAULT_PORT = 3000;

app.use(bodyParser.json());

app.get('/api/create-table', (req, res) => {
    const table = new Table(['vasil', 'juli'])
    table.startGame();
    res.json(['vasil', 'juli'])
})

app.listen(DEFAULT_PORT, () => {
    console.log(`Server listening on port ${DEFAULT_PORT}`)
})