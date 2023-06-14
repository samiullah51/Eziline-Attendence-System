import React from "react";
import { Link } from "react-router-dom";

function SingleCard({ title, count, bg, to }) {
  return (
    <Link to={to} className="single__card" style={{ backgroundColor: bg }}>
      <p>{title}</p>
      <h1>{count}</h1>
    </Link>
  );
}

export default SingleCard;
