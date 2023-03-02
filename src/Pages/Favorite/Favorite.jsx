import React from "react";
import { Link } from "react-router-dom";
import { LikesItem } from "../../components/LikesItem/LikesItem";

export const Favorite = (props) => {
  const { likes = [] } = props;
  return (
    <div className="likes_pages">
      <Link to="/">← Back To All</Link>
      <h2 className="">Liked ones</h2>
      <p className="likes_text">
        Your favorite characters from the Harry Potter universe.
      </p>
      <div className="flex">
        {likes.length ? (
          likes.map((item) => <LikesItem key={item.id} {...item} />)
        ) : (
          <li>You choose no one</li>
        )}
      </div>
    </div>
  );
};
