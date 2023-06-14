import React from "react";

function SingleAttendence({ att }) {
  return (
    <div className="single__attendence">
      <p>13-June-2023</p>
      <p
        className="status"
        style={{ backgroundColor: att === "Present" ? "green" : "red" }}
      >
        {att}
      </p>
    </div>
  );
}

export default SingleAttendence;
