import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function MarkAttendence() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents">
          <h1>Mark Attendence</h1>
        </div>
      </div>
    </div>
  );
}

export default MarkAttendence;
