import React, { useState, useEffect } from "react";

const Player = (props) => {
  const [cards, setCards] = useState([]);
  const dealCard = () => {
    fetch(`${document.location.origin}/api/deal-hand`)
      .then((res) => res.json())
      .then((card) => console.log(card));
  };

  useEffect(() => {
    dealCard();
  },[])

  return (
    <>
      <div>{props.player.name}</div>
      <div>{props.player.balance}</div>
    </>
  );
};

export default Player;
