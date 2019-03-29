const Deck = ({ deck }) => {
  return (
    <div className="deck">
      <h2>Deck</h2>
      <ul className="deck">
        {deck
          ? deck.map((card) => (
              <li className="deck-card">{`${card.suit} ${card.value}`}</li>
            ))
          : null}
      </ul>

      <style jsx>
        {`
          .deck {
            margin-top: 30px;
          }
        `}
      </style>
    </div>
  );
};

export default Deck;
