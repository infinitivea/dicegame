import React, { useState } from "react";

function Header({ newGame }) {
  return (
    <div className="header">
      <button className="btn" onClick={newGame}>
        NewGame
      </button>
    </div>
  );
}

export default Header;
