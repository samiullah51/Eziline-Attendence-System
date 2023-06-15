import React from "react";
import SingleAttendence from "./SingleAttendence/SingleAttendence";

function RecentAttendence({ title }) {
  return (
    <div className="recent__attendence">
      <h2>{title} (6)</h2>
      <SingleAttendence att="Present" />
      <SingleAttendence att="Absent" />
      <SingleAttendence att="Absent" />
      <SingleAttendence att="Present" />
      <SingleAttendence att="Present" />
      <SingleAttendence att="Absent" />
    </div>
  );
}

export default RecentAttendence;
