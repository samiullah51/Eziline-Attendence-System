import React from "react";

function AttendenceGrade({ title }) {
  return (
    <div className="attendence__grade">
      <h2>{title}</h2>
      {title === "Attendence Record" ? (
        <div className="grade__full">
          <div className="grade__current"></div>
          <span>90%</span>
        </div>
      ) : (
        <div className="grade">
          <p>A</p>
        </div>
      )}
    </div>
  );
}

export default AttendenceGrade;
