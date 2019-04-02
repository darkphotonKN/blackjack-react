/* Utility functions related to deck manipulation  */

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

  const playerTotal = playerHand.reduce((card1, card2) => {
    return { value: checkCardValue(card1.value) + checkCardValue(card2.value) };
  });
  console.log("Player's Total:", playerTotal);
  const dealerTotal = dealerHand.reduce(
    (card1, card2) => checkCardValue(card1.value) + checkCardValue(card2.value)
  );

  console.log('Player total:', playerTotal.value);
  console.log(`Dealer total: ${dealerTotal}`);

  return playerTotal.value > dealerTotal ? 'PLAYER' : 'DEALER';
};

// checks if current hand is a bust
export const checkBust = (hand) => {
  const checkTotal = hand.reduce((acc, card) => {
    console.log('Iterating\n-----------\nStarting:', card);
    // console.log('Card2:', card2);
    // console.log('Current Total:', checkCardValue(card1.value));
    // console.log('Adding value:', checkCardValue(card2.value));

    return { value: checkCardValue(acc.value) + checkCardValue(card.value) };
  });

  console.log('TOTAL TEST:', checkTotal);

  console.log(
    'Hand Value:',
    hand.reduce(
      (card1, card2) =>
        checkCardValue(card1.value) + checkCardValue(card2.value)
    )
  );
  return (
    hand.reduce((card1, card2) => {
      return {
        value: checkCardValue(card1.value) + checkCardValue(card2.value)
      };
    }).value > 21
  );
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
