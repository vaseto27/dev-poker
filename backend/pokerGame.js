const uuid = require("uuid").v1;
const Deck = require('./deck')

class PokerGame {
    constructor() {
        this.id = uuid();
        this.players = [];
        this.deck = new Deck()
    }


    addPlayer(player) {
        this.players.push(player)
    }

    dealHands() {
        for(const player of this.players) {
            player.receiveCard(this.deck.dealCard());
            player.receiveCard(this.deck.dealCard());
        }
    }
    showHands() {
        for(const player of this.players) {
            console.log(`${player.name}'s hand: ${player.showHand()}`)
        }
    }
}

module.exports = PokerGame;