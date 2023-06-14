import React from "react";
import SingleAttendence from "./SingleAttendence/SingleAttendence";

function RecentAttendence() {
  return (
    <div className="recent__attendence">
      <h2>Recent Attendence</h2>
      <SingleAttendence att="Present" />
      <SingleAttendence att="Absent" />
      <SingleAttendence att="Present" />
    </div>
  );
}

export default RecentAttendence;
