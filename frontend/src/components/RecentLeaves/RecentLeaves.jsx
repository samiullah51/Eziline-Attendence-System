import React from "react";
import "./RecentLeaves.css";
import SingleLeave from "./SingleLeave/SingleLeave";
function RecentLeaves() {
  return (
    <div className="recent__attendence">
      <h2>Recent Leaves</h2>
      {/* single attendence */}
      <SingleLeave status="Accepted" bg="green" />
      <SingleLeave status="Rejected" bg="red" />
      <SingleLeave status="Pending" bg="#E75480" />
    </div>
  );
}

export default RecentLeaves;
