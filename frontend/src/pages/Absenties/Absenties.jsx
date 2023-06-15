import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";
import SingleAttendence from "../../components/RecentAttendence/SingleAttendence/SingleAttendence";
import "./Absenties.css";
function Absenties() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__absenties">
          <h1>Absenties (5)</h1>
          <SingleAttendence att="Absent" />
          <SingleAttendence att="Absent" />
          <SingleAttendence att="Absent" />
          <SingleAttendence att="Absent" />
          <SingleAttendence att="Absent" />
        </div>
      </div>
    </div>
  );
}

export default Absenties;
