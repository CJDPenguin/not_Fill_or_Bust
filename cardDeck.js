class Card {
    constructor(group, name) {
        this.group = group;
        this.name = name;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        for (let i = 0; i < 4; i++) {
            this.cards.push(new Card("black", "Vengeance"))
        }
        for (let i = 0; i < 8; i++) {
            this.cards.push(new Card("black", "No Dice"))
        }
        for (let i = 0; i < 4; i++) {
            this.cards.push(new Card("red", "Must Bust"))
        }
        for (let i = 0; i < 2; i++) {
            this.cards.push(new Card("red", "Double Trouble"))
        }
        for (let i = 0; i < 6; i++) {
            this.cards.push(new Card("red", "Fill 1000"))
        }
        for (let i = 0; i < 12; i++) {
            this.cards.push(new Card("white", "300"))
        }
        for (let i = 0; i < 10; i++) {
            this.cards.push(new Card("white", "400"))
        }
        for (let i = 0; i < 8; i++) {
            this.cards.push(new Card("white", "500"))
        }
    }
}

function shuffleDeck(deck){
    let currentIndex = deck.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
    return deck;
}