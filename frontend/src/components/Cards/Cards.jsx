import React from "react";
import "./Cards.css";
import SingleCard from "./SingleCard/SingleCard";
function Cards() {
  const isAdmin = true;
  return !isAdmin ? (
    <div className="cards">
      <SingleCard
        title="Total Working Days"
        count={12}
        bg="rgb(11, 32, 90)"
        to="/veiwatt"
      />
      <SingleCard
        title="Presenties"
        count={8}
        bg="rgb(4, 148, 47)"
        to="/presenties"
      />
      <SingleCard
        title="Absenties"
        count={3}
        bg="rgb(214, 25, 25)"
        to="/absenties"
      />
      <SingleCard title="Leaves" count={1} bg="#083D77" to="/leaverequest" />
    </div>
  ) : (
    <div className="cards">
      <SingleCard
        title="Total Students"
        count={59}
        bg="rgb(11, 32, 90)"
        to="/veiwatt"
      />

      <SingleCard title="Leaves" count={1} bg="#083D77" to="/leaverequest" />
    </div>
  );
}

export default Cards;
