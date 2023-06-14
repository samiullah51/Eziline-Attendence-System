import React from "react";
import { Link } from "react-router-dom";

function SingleLeave({ status, bg }) {
  return (
    <div className="single__attendence">
      <p>12-June-2023</p>
      <p className="subject">Leave for Urgent</p>
      <p>Leave for urgent details...</p>
      <Link className="details__view">Views</Link>
      <p className="status" style={{ backgroundColor: bg }}>
        {status}
      </p>
    </div>
  );
}

export default SingleLeave;
