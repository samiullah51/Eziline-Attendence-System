import React, { useState } from "react";
import "./Mark.css";
import { Link } from "react-router-dom";
function Mark() {
  const [att, setAtt] = useState("Present");
  let percentBgColor = "";
  const percentAtt = 89;
  if (percentAtt >= 85 && percentAtt <= 100) {
    percentBgColor = "#08cb63";
  } else if (percentAtt >= 75 && percentAtt < 85) {
    percentBgColor = "#a9d307";
  } else {
    percentBgColor = "#e9051a";
  }
  //   format date
  const currentDate = new Date().toLocaleString("US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleIsPresent = () => {
    setAtt("Present");
    console.log("Present");
  };
  //   handle present
  const handleIsAbsent = () => {
    setAtt("Absent");
    console.log("Absent");
  };
  //   handle mark
  const handleMark = () => {
    console.log(att);
  };
  return (
    <div className="mark">
      <div className="mark__form">
        <p>{currentDate}</p>
        <label
          htmlFor="present"
          className={att === "Present" ? "present" : ""}
          onClick={handleIsPresent}
        >
          Present
        </label>
        <label
          htmlFor="absent"
          className={att === "Absent" ? "absent" : ""}
          onClick={handleIsAbsent}
        >
          Absent
        </label>
        <p className="show__att" style={{ backgroundColor: percentBgColor }}>
          {percentAtt}%
        </p>
        <Link to="/leaverequest">Leave Request</Link>
      </div>
      {/* save button */}
      <button onClick={handleMark}>Save Attendence</button>
    </div>
  );
}

export default Mark;
