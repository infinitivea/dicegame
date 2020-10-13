import React from "react";

function Player({ name, score, active }) {
  return (
    <div className={`card${active ? " active" : ""}`}>
      <h1 className="player-name">Player {name}</h1>
      <p className="player-score">{score}</p>
    </div>
  );
}

export default Player;
