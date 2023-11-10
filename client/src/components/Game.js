import React, { useState, useEffect } from "react";
import Player from "./Player";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const joinGame = () => {
    fetch(`${document.location.origin}/api/add-player`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: "vasil", balance: 1000 }),
    })
      .then((res) => res.json())
      .then((player) => setPlayers([...players, player.data]));
  };

  
  return (
    <div>
      <button className="join-btn" onClick={joinGame}>Join Game</button>
      {players.map((player, index) => {
        return (
          <div className={'seat'+(index+1)} key={player.id}>
             <Player player={player}/>
          </div>
        );
      })}
    </div>
  );
};

export default Game;
