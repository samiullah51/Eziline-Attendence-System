import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MarkAttendence.css";
import Mark from "../../components/Mark/Mark";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";

function MarkAttendence() {
  const currentDate = new Date().toLocaleString("US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="mark__contents">
          <h1>Mark Your Attendence</h1>
          <p className="time">
            It is <span>{currentDate} </span> today
          </p>
          {/* Mark Attendece */}
          <Mark />
          {/* Recent Attendence */}
          <RecentAttendence title="Previous Attendence" />
        </div>
      </div>
    </div>
  );
}

export default MarkAttendence;
