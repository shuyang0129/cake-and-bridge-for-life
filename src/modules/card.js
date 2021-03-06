////建立新牌組
function buildNewDeck() {
    const suit = ['spades', 'heart', 'diamond', 'club'];
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const deck = []
    for (i = 0; i < suit.length; i++) {
        let card = {};
        for (j = 0; j < number.length; j++) {
            card = {
                suit: suit[i],
                number: number[j]
            }
            deck.push(card)
        }
    }
    return deck
}
////洗牌
function shuffle(deck) {
    let i = deck.length;
    while (i > 1) {
        let index = Math.floor(Math.random() * i--);
        [deck[i], deck[index]] = [deck[index], deck[i]]
    }
    return deck
}
////發牌(給四個玩家)
function dealCards(playerAmount, deck) {
    const players = [];
    for (let i = 0; i < playerAmount; i++) {
        const eachPlayer = [];
        players.push(eachPlayer)
    }
    for (let i = 0; i < deck.length; i++) {
        playerIndex = i % playerAmount
        players[playerIndex].push(deck[i]);
    }
    const sorted = players.map(cards => sortCards(cards))
    return sorted
}
//排序牌
function sortCards(cards) {
    const sorted = cards.sort((cardA, cardB) => {
        const order = ['Spades', 'heart', 'club', 'diamond'];
        cardA = 100 * (4 - order.indexOf(cardA.suit)) + 13 - cardA.number
        cardB = 100 * (4 - order.indexOf(cardB.suit)) + 13 - cardB.number
        return cardB - cardA
    })
    return sorted
}

//比大小
function countPoint(trump, nowSuit, card) {
    let point = 0;
    if (card.suit === trump) {
        point += 20;
    }
    if (card.suit !== nowSuit) {
        point -= 20;
    }
    point += card.number;
    return point;
}

function highCard(trump, nowSuit,cards) {
    const point = cards.map(card => {
        const point = countPoint(trump,nowSuit, card)
        return point
    })
    const winnerIndex = point.indexOf(Math.max(...point))
    return cards[winnerIndex]
}
//出牌（從牌組裡刪除某張牌）
function playCard(played,playerDeck){
    const index = playerDeck.findIndex(card=>{
        return card.suit === played.suit && card.number === played.number
    });

    playerDeck.splice(index,1)
};

const shuffledDeck = shuffle(buildNewDeck())