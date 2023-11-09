const uuid = require("uuid").v1;

class Table {
    constructor(players) {
        this.id = uuid();
        this.players = players;
    }


    startGame() {
        console.log('Game is starting')
        for(let i = 0; i < this.players.length; i++) {
            console.log(`Player ${this.players[i]} is ready`)
        }
    }   
}

module.exports = Table;