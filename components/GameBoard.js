import Hand from './Hand';
import Deck from './Deck';

export default class GameBoard extends React.Component {
  state = {
    gameMsg: '',
    playerMoney: 100,
    dealerMoney: 0,
    deck: [],
    hand: [],
    dealerHand: []
  };

  componentDidMount() {
    // initialize deck
    this.setState({
      deck: this.shuffleDeck(this.initializeDeck())
    });
  }

  initializeDeck = () => {
    // card property possibilities
    const values = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K'
    ];
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

    // generates 52 cards, checking if each card has been generated only 4 times
    const deck = [];

    values.forEach((value) => {
      suits.forEach((suit) => {
        deck.push({ suit: suit, value: value });
      });
    });

    return deck;
  };

  // shuffle deck
  shuffleDeck = (deck) => {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
    }
    return deck;
  };

  shuffleDeck = () => {};

  // draws a single card for the deck for player or dealer
  handleDealCard = () => {
    // removes first element from the array and store it
    const cardDrawn = this.state.deck.shift();

    return cardDrawn;
  };

  // deals cards to player and dealer
  dealCards = () => {
    // deal card for player
    const hand = this.state.hand;
    hand.push(this.handleDealCard());

    // deal card for dealer
    const dealerHand = this.state.dealerHand;
    dealerHand.push(this.handleDealCard());

    this.setState({
      gameMsg: 'The cards are dealt. "Goodluck, sir"',
      hand,
      dealerHand
    });
  };

  render() {
    const { gameMsg, hand, dealerHand, deck } = this.state;

    console.log(this.state.deck);
    return (
      <>
        <div className="game-msg">
          {gameMsg
            ? gameMsg
            : 'The dealer stared blankly at you. "Would you like to try a round?'}
        </div>
        <button className="deal-btn" onClick={this.dealCards}>
          Deal
        </button>
        {/* Restart game, player loses */}
        <button className="deal-btn">Fold</button>
        {/* Dealer's */}
        <Hand hand={dealerHand} dealer />
        {/* Player's */}
        <Hand hand={hand} player />
        <Deck deck={deck} />
      </>
    );
  }
}
