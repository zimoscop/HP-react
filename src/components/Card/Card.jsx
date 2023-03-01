import React, { useState } from "react";
// import like from "../components/image/Group 1 like";
// import notlike from "../components/image/Group 1-not";

export const Card = (props) => {
  const { id, name, actor, gender, wand, house, image, alive } = props;

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div id={id} className="hp__card">
      <div className="hp__pic">
        {name} - foto not found
        <img src={image} alt="" />
        <button
          data-name={name}
          onClick={handleClick}
          className={active ? "like " : "notlike"}
        ></button>
      </div>
      <div className="hp__text">
        <h2>{name}</h2>
        <p>Actor:{actor}</p>
        <p>Gender:{gender}</p>
        <p>House:{house}</p>
        <p>Wand core: {wand.core}</p>
        <p>Alive:{alive === true ? "Yes" : "no"}</p>
      </div>
    </div>
  );
};
