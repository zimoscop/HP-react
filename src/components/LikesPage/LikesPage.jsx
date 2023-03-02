import React from "react";
import { LikesItem } from "../LikesItem/LikesItem";

export const LikesPage = (props) => {
  const { likes = [], handleLikesVis } = props;
  return (
    <div className="likes_pages">
      <i className="likes_cross" onClick={handleLikesVis}>
        ← Back To All
      </i>
      <h2 className="">Liked ones</h2>
      <p className="likes_text">
        Your favorite characters from the Harry Potter universe.
      </p>
      {likes.length ? (
        likes.map((item) => <LikesItem key={item.id} {...item} />)
      ) : (
        <li>You choose no one</li>
      )}
    </div>
  );
};
