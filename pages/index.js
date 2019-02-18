import GameBoard from '../components/GameBoard';

const Index = () => {
  return (
    <div className="main-app">
      <h2>Blackjack</h2>

      <GameBoard />

      <style jsx>{`
        * {
          font-family: 'Helvetica';
        }

        body {
          font-size: 1rem;
          font-weight: light;
        }

        h2 {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Index;
