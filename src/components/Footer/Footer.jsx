import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">{new Date().getFullYear()}</p>
    </div>
  );
};
