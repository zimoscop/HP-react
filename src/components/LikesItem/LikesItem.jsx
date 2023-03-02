import React from "react";

export const LikesItem = (props) => {
  const { id, name, actor, gender, house, image, alive } = props;
  return (
    <div id={id} className="likes_page">
      <div className="hp__card">
        <div className="hp__pic">
          {name} - foto not found
          <img src={image} alt="" />
          <button></button>
        </div>
        <div className="hp__text">
          <h2>{name}</h2>
          <p>Actor:{actor}</p>
          <p>Gender:{gender}</p>
          <p>House:{house}</p>
          <p>Alive:{alive === true ? "Yes" : "no"}</p>
        </div>
      </div>
    </div>
  );
};
