import React from "react";

export const Card = (props) => {
  const { id, name, actor, gender, wand, house, image, alive } = props;
  return (
    <div id={id} className="hp__card">
      <div className="hp__pic">
        {name} - foto not found
        <img src={image} alt="foto" />
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
