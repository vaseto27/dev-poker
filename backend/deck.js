const {DECK_SUITS, DECK_VALUES} = require('./config');
const Card = require('./card')

class Deck {
    constructor() {
        this.ranks = DECK_VALUES;
        this.suits = DECK_SUITS;
        this.cards = [];

        this.initializeDeck();
        this.shuffleDeck();
    }

    initializeDeck() {
        for(const siut of this.suits) {
            for(const rank of this.ranks) {
                this.cards.push(new Card(rank,siut))
            }
        }
    }

    shuffleDeck() {
        for(let i = this.cards.length -1; i> 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j, this.cards[i]]]
        }
    }

    dealCard() {
        return this.cards.pop();
    }
}

module.exports = Deck;