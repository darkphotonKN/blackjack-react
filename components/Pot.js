const Pot = ({ money }) => {
  return (
    <div className="pot">
      Pot: {money}
      <style jsx>{`
        .pot {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Pot;
