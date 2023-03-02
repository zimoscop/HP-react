import React from "react";

export const ShowLiked = (props) => {
  const { count = 0 } = props;
  return (
    <div className="btn_like">
      <button className="btn_symbol"></button>
      <span className="btn_text">Show Liked {count}</span>
    </div>
  );
};
