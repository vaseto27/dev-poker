import React, { useState, useEffect } from "react";

const Player = (props) => {
  const [cards, setCards] = useState([]);
  const dealCard = () => {
    fetch(`${document.location.origin}/api/deal-hand`)
      .then((res) => res.json())
      .then((card) => {
        setCards(card.data);
      });
  };

  useEffect(() => {
    dealCard();
  }, []);

  return (
    <>
      <div>{props.player.name}</div>
      <div>{props.player.balance}</div>
      <div className="card-container">
        {cards.map((card, index) => {
          return (
            <div key={index}>
              {card.rank} {card.suit}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Player;
