const Hand = ({ hand, dealer, player }) => {
  console.log('Hand:', hand);
  if (dealer) {
    return (
      <div className="hand">
        <h2>Dealer's Hand</h2>
        <div className="cards-on-hand">
          <ul className="hand-list list-group">
            {hand.map((card) => (
              <li className="hand-card list-group-item">{`${card.value} of ${
                card.suit
              }`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (player) {
    return (
      <div className="hand">
        <h2>Player's Hand</h2>
        <div className="cards-on-hand">
          <ul className="hand-list list-group">
            {hand.map((card) => (
              <li className="hand-card list-group-item">{`${card.value} of ${
                card.suit
              }`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Hand;
