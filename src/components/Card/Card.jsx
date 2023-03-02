import React, { useState } from "react";

export const Card = (props) => {
  const { id, name, actor, gender, wand, house, image, alive, likedCollector } =
    props;

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="hp__card">
      <div className="hp__pic">
        {name} - foto not found
        <img src={image} alt="" />
        <button
          data-id={active ? "like" : "notlike"}
          data-name={name}
          onClick={() => {
            handleClick();
            likedCollector({ id, name });
          }}
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
