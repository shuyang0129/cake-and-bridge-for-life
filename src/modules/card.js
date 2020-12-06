//建立新牌組
function buildNewDeck() {
    const suit = ['Spades', 'heart', 'diamond', 'club'];
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
//洗牌
function shuffle(deck) {
    let i = deck.length;
    while (i > 1) {
        let index = Math.floor(Math.random() * i--);
        [deck[i], deck[index]] = [deck[index], deck[i]]
    }
    return deck
}
//發牌(給四個玩家)
function dealCards(playerAmount,deck) {
    const players = [];
    for (let i = 0; i < playerAmount; i++) {
        const eachPlayer = [];
        players.push(eachPlayer)
        for (let i = 0;i<deck.length;i=i+4){
            eachPlayer.push(deck[i])
        }
    }
    return players
}
//
console.log(dealCards(4,shuffle(buildNewDeck())))