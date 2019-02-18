import Hand from '../Hand';
import Pot from '../Pot';

const Player = ({ hand, money }) => {
  return (
    <div className="player">
      <h3 className="player-type">Player</h3>
      <Hand hand={hand} player />
      <Pot money={money} />
      <style jsx>
        {`
          .player {
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

export default Player;
