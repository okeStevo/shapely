import React from "react";
import CardItem from "./ui/cardIteem";
import { cardData } from "@/app/data/card";

const Card = () => {
  return (
    <div className="display-flex items-center justify-center">
      {cardData.map((eachData, index) => {
        return <CardItem key={index} name={eachData.name} >{eachData.children}</CardItem>;
      })}
    </div>
  );
};

export default Card;
