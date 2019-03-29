import Hand from '../Hand';
import Pot from '../Pot';

const Dealer = ({ hand, money }) => {
  return (
    <div className="dealer">
      <h3 className="player-type">Dealer</h3>
      <Hand hand={hand} dealer />
      <Pot money={money} />
      <style jsx>
        {`
          .dealer {
            margin-top: 25px;
            border: 2px solid #1a1a1a;
            border-radius: 4px;
            padding: 20px 35px;
          }
          h3.player-type {
            text-decoration: underline;
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Dealer;
