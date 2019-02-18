import GameBoard from '../components/GameBoard';

const Index = () => {
  return (
    <div className="main-app">
      <h2 className="main-title">Blackjack</h2>

      <GameBoard />

      <style jsx>{`
        * {
          font-family: 'Helvetica';
        }

        body {
          font-size: 1rem;
          font-weight: light;
        }

        .main-app {
          padding: 0 50px;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: light;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Index;
