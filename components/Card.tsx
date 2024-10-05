import React from "react";
import CardItem from "./ui/cardIteem";
import { cardData } from "@/app/data/card";

const Card = () => {
  return (
    <div className="display-flex items-center justify-center">
      {cardData.map((eachData, index) => {
        return <CardItem key={index} children={eachData.children} name={eachData.name} />;
      })}
    </div>
  );
};

export default Card;
