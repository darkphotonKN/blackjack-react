import Deck from './Deck';
import Player from './players/Player';
import Dealer from './players/Dealer';

import { shuffleDeck, checkWinner } from '../utils/deckUtil';

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
      deck: shuffleDeck(this.initializeDeck())
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

    console.log(deck);
    return deck;
  };

  // draws a single card for the deck for player or dealer
  handleDealCard = () => {
    // removes first element from the array and store it
    const cardDrawn = this.state.deck.shift();

    return cardDrawn;
  };

  calculatePot = (winner, player) => {
    if (player === 'player') {
      if (winner === 'DEALER') {
        if (this.state.playerMoney <= 10) {
          return { playerMoney: 0, dealerMoney: this.state.dealerMoney + 10 };
        } else {
          return {
            playerMoney: this.state.playerMoney - 10,
            dealerMoney: this.state.dealerMoney + 10
          };
        }
      } else if (winner === 'PLAYER') {
        if (this.state.dealerMoney <= 10) {
          return { dealerMoney: 0, playerMoney: this.state.playerMoney + 10 };
        } else {
          return {
            dealerMoney: this.state.dealerMoney - 10,
            playerMoney: this.state.playerMoney + 10
          };
        }
      }
    }
    if (player === 'dealer') {
      if (winner === 'DEALER') {
        if (this.state.playerMoney <= 10) {
          return { playerMoney: 0, dealerMoney: this.state.dealerMoney + 10 };
        } else {
          return {
            playerMoney: this.state.playerMoney - 10,
            dealerMoney: this.state.dealerMoney + 10
          };
        }
      } else if (winner === 'PLAYER') {
        if (this.state.dealerMoney <= 10) {
          return { dealerMoney: 0, playerMoney: this.state.playerMoney + 10 };
        } else {
          return {
            dealerMoney: this.state.dealerMoney - 10,
            playerMoney: this.state.playerMoney + 10
          };
        }
      }
    }
  };

  // deals cards to player and dealer
  dealCards = () => {
    // deal card for player
    const hand = [...this.state.hand];
    hand.push(this.handleDealCard());

    // deal card for dealer
    const dealerHand = [...this.state.dealerHand];
    dealerHand.push(this.handleDealCard());

    if (hand.length < 2 && dealerHand.length < 2) {
      this.setState({
        gameMsg: 'The cards are dealt. "Goodluck, sir."',
        hand,
        dealerHand
      });
    } else {
      // else play out result
      this.setState({
        gameMsg: 'The cards are dealt. "Let\'s see here..."',
        hand,
        dealerHand
      });

      // show winner
      const winner = checkWinner(hand, dealerHand);

      setTimeout(() => {
        this.setState({
          gameMsg:
            winner === 'DEALER'
              ? 'You lost this round. "Better luck next time, sir."'
              : 'You won this round.',
          dealerHand: [],
          hand: [],
          playerMoney: this.calculatePot(winner, 'player').playerMoney,
          dealerMoney: this.calculatePot(winner, 'dealer').dealerMoney
        });
      }, 3500);
    }
  };

  render() {
    const {
      gameMsg,
      hand,
      dealerHand,
      deck,
      playerMoney,
      dealerMoney
    } = this.state;

    console.log(this.state.deck);
    return (
      <>
        <div className="game-msg">
          {gameMsg
            ? gameMsg
            : 'The dealer stares at you blankly. "Would you like to try a round?"'}
        </div>
        <button className="deal-btn" onClick={this.dealCards}>
          Deal
        </button>
        {/* Restart game, player loses */}
        <button className="fold-btn">Fold</button>
        {/* Dealer's Area */}
        <Dealer hand={dealerHand} money={dealerMoney} />

        {/* Player's Area */}
        <Player hand={hand} money={playerMoney} />
        <Deck deck={deck} />

        <style jsx>{`
          .game-msg {
            border-radius: 4px;
            padding: 0.5rem 0.7rem;
            background-color: #1a1a1a;
            color: #fff;
            margin: 20px 0;
          }
          button {
            border-radius: 4px;
            padding: 0.5rem 1.2rem;
            border: 2px solid #1a1a1a;
            color: #1a1a1a;
            cursor: pointer;
            transition: all 200ms ease-in-out;
          }
          button.deal-btn {
            margin-right: 20px;
          }
          button.deal-btn:hover {
            background-color: #1a1a1a;
            color: #fff;
          }
          button.fold-btn:hover {
            background-color: #c0392b;
          }
        `}</style>
      </>
    );
  }
}
