import Deck from './Deck';
import Player from './players/Player';
import Dealer from './players/Dealer';

import { shuffleDeck, checkWinner, checkBust } from '../utils/deckUtil';

export default class GameBoard extends React.Component {
  state = {
    gameMsg: '',
    playerMoney: 100,
    dealerMoney: 0,
    deck: [],
    hand: [],
    dealerHand: [],
    // whether or not to show the game controls
    hideButtons: false
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

  handleResetGame = () => {
    // shuffles deck
    const shuffledDeck = shuffleDeck(this.initializeDeck());

    // reset game state after shuffling
    this.setState({
      gameMsg: 'Game was reset. "Care to try another round?"',
      playerMoney: 100,
      dealerMoney: 0,
      deck: shuffledDeck,
      hand: [],
      dealerHand: []
    });
  };

  // draws a single card for the deck for player or dealer
  handleDealCard = () => {
    // removes first element from the array and store it
    const cardDrawn = this.state.deck.shift();

    return cardDrawn;
  };

  handleEndRound = () => {
    // play out result
    this.setState({
      gameMsg: 'The dealer reveals his card. "Let\'s see here..."',
      hideButtons: true
    });

    // show winner
    const winner = checkWinner(this.state.hand, this.state.dealerHand);

    setTimeout(() => {
      this.setState({
        gameMsg:
          winner === 'DEALER'
            ? 'You lost this round. "Better luck next time, sir."'
            : 'You won this round.',
        dealerHand: [],
        hand: [],
        playerMoney: this.calculatePot(winner, 'player').playerMoney,
        dealerMoney: this.calculatePot(winner, 'dealer').dealerMoney,
        hideButtons: false
      });
    }, 1700);
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
    const hand = [...this.state.hand];
    const dealerHand = [...this.state.dealerHand];

    console.log(
      'Checking if tested hand is bust',
      checkBust([{ value: '7' }, { value: '5' }, { value: '7' }])
    );

    if (hand.length < 2) {
      // deal card for player
      hand.push(this.handleDealCard());

      // deal card for dealer
      dealerHand.push(this.handleDealCard());

      // update state with changes and new message to player
      this.setState({
        gameMsg: 'The cards are dealt. "Goodluck, sir."',
        hand,
        dealerHand
      });
    } else {
      // deal card for player only
      hand.push(this.handleDealCard());

      const bust = checkBust(hand);
      // check for bust
      console.log('Bust?:', checkBust(hand));

      if (bust) {
        // player automatically loses round
        this.setState({
          gameMsg:
            'Your hand is bust! You lose the round. "Better luck next time, sir."',
          dealerHand: [],
          hand: [],
          playerMoney: this.state.playerMoney - 10,
          dealerMoney: this.state.dealerMoney + 10
        });
      } else {
        // update state with changes and new message to player
        this.setState({
          gameMsg: 'A card is dealt for you. "Goodluck, sir."',
          hand,
          dealerHand
        });
      }
    }
  };

  render() {
    const {
      gameMsg,
      hand,
      dealerHand,
      deck,
      playerMoney,
      dealerMoney,
      hideButtons
    } = this.state;

    console.log(this.state.deck);
    return (
      <>
        <div className="game-msg">
          {gameMsg
            ? gameMsg
            : 'The dealer stares at you blankly. "Would you like to try a round?"'}
        </div>

        <button
          className={!hideButtons ? 'deal-btn' : 'deal-btn disabled'}
          onClick={this.dealCards}
        >
          Deal
        </button>

        {/* Ends turn to check for winner */}
        <button
          className={
            !hideButtons && dealerHand.length > 1
              ? 'end-btn'
              : 'end-btn disabled'
          }
          onClick={this.handleEndRound}
        >
          End Round
        </button>
        {/* Restart game, player loses unfinished round */}
        <button
          className={
            !hideButtons && dealerHand.length > 0
              ? 'fold-btn'
              : 'fold-btn disabled'
          }
          onClick={this.handleResetGame}
        >
          Restart
        </button>
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
          button.deal-btn,
          button.end-btn {
            margin-right: 20px;
          }
          button.deal-btn:hover {
            background-color: #1a1a1a;
            color: #fff;
          }
          button.fold-btn:hover,
          button.end-btn:hover {
            background-color: #c0392b;
          }

          .disabled {
            pointer-events: none;
            background-color: #aaa;
          }
        `}</style>
      </>
    );
  }
}
