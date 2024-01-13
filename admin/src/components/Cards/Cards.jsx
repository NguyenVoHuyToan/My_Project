import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {
  // Select the first card from the array
  const firstCard = cardsData[0];

  return (
    <div className="Cards">
      <div className="parentContainer">
        <Card
          title={firstCard.title}
          color={firstCard.color}
          barValue={firstCard.barValue}
          value={firstCard.value}
          png={firstCard.png}
          series={firstCard.series}
        />
      </div>
    </div>
  );
};

export default Cards;
