const Deck = ({ deck }) => {
  return (
    <div>
      <h2>Deck</h2>
      <ul className="deck">
        {deck
          ? deck.map((card) => (
              <li className="deck-card">{`${card.suit} ${card.value}`}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Deck;
