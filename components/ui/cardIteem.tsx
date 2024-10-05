import React from "react";
interface childrenProps {
  children: String;
  name: String;
}
const CardItem = ({ children, name }: childrenProps) => {
  return (
    <>
      <div className="w-[30%] border m-5">
        <p className=" border" dangerouslySetInnerHTML={{ __html: children }}></p>
        <p>{name}</p>
      </div>
    </>
  );
};

export default CardItem;
