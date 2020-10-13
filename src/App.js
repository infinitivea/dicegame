import React, { Fragment, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Player from "./components/Player";
import DiceCard from "./components/DiceCard";

function App() {
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);

  const roll = () => {
    const newDiceScore = Math.ceil(Math.random() * 6);
    setDiceScore(newDiceScore);
    if (newDiceScore === 1) {
      setCurrentPlayer((currentPlayer) => (currentPlayer === 0 ? 1 : 0));
      setRoundScore(0);
    } else {
      setRoundScore((currentValue) => currentValue + newDiceScore);
    }
  };

  const keep = () => {
    // const totalScore = roundScore + playerScore[currentPlayer];
    // const clonePlayerScore = [...playerScore];
    // clonePlayerScore[currentPlayer] = totalScore;
    // setPlayerScore(clonePlayerScore);

    setPlayerScore((currentValue) =>
      currentValue.map((score, idx) =>
        idx === currentPlayer ? score + roundScore : score
      )
    );
    setCurrentPlayer((currentPlayer) => (currentPlayer === 0 ? 1 : 0));
    setRoundScore(0);
  };

  const newGame = () => {
    setPlayerScore([0, 0]);
    setCurrentPlayer(0);
    setRoundScore(0);
    setDiceScore(1);
  };

  return (
    <Fragment>
      <Header newGame={newGame} />
      <div className="container">
        <Player
          name="1"
          score={playerScore[0]}
          active={currentPlayer === 0 ? true : false}
        />
        <DiceCard
          diceScore={diceScore}
          roundScore={roundScore}
          roll={roll}
          keep={keep}
        />
        <Player
          name="2"
          score={playerScore[1]}
          active={currentPlayer === 1 ? true : false}
        />
      </div>
    </Fragment>
  );
}

export default App;

// keep กดไม่ได้ครั้งแรก
// checkScore === 100 เกมจบ
