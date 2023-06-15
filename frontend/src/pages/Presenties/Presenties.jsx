import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Presenties.css";
import SingleAttendence from "../../components/RecentAttendence/SingleAttendence/SingleAttendence";
function Presenties() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__Presenties">
          <h1>Presenties (6)</h1>
          <SingleAttendence att="Present" />
          <SingleAttendence att="Present" />
          <SingleAttendence att="Present" />
          <SingleAttendence att="Present" />
          <SingleAttendence att="Present" />
          <SingleAttendence att="Present" />
        </div>
      </div>
    </div>
  );
}

export default Presenties;
