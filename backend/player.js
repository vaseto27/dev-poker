const uuid = require("uuid").v1;

class Player {
    constructor(name, balance){
        this.id = uuid();
        this.name = name;
        this.balance = balance;
        this.hand = [];
    }

    receiveCard(card) {
        this.hand.push(card)
    }

    showHand() {
        return this.hand.map(card => card.toString().join(', '))
    }
}

module.exports = Player;