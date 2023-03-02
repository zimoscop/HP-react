import React from "react";
import { Card } from "../Card/Card";

export const Cards = (props) => {
  const { cards, likedCollector } = props;
  return (
    <div className="hp__cards">
      {cards.map((card) => {
        return <Card key={card.id} {...card} likedCollector={likedCollector} />;
      })}
    </div>
  );
};
