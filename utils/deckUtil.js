// shuffles deck
export const shuffleDeck = (deck) => {
  console.log('Initial:', deck);
  var j, x, i;
  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = deck[i];
    deck[i] = deck[j];
    deck[j] = x;
  }
  console.log('After:', deck);
  return deck;
};

// checks for winner based on hand
export const checkWinner = (playerHand, dealerHand) => {
  console.log('Checking winner...');
  console.log("Player's Hand:", playerHand);
  console.log("Dealer's Hand:", dealerHand);

  const playerTotal = playerHand.reduce(
    (card1, card2) => checkCardValue(card1.value) + checkCardValue(card2.value)
  );
  const dealerTotal = dealerHand.reduce(
    (card1, card2) => checkCardValue(card1.value) + checkCardValue(card2.value)
  );

  console.log(`Player total: ${playerTotal}, Dealer total: ${dealerTotal}`);

  return playerTotal > dealerTotal ? 'PLAYER' : 'DEALER';
};

const checkCardValue = (card) => {
  switch (card) {
    case 'J':
      return 10;
    case 'Q':
      return 10;
    case 'K':
      return 10;
    case 'A':
      return 11;
    default:
      return Number(card);
  }
};
