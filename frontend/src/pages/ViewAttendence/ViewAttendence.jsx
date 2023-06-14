import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function ViewAttendence() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents">
          <h1>View Attendence</h1>
        </div>
      </div>
    </div>
  );
}

export default ViewAttendence;
