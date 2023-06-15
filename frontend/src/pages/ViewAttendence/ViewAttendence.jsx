import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";
import SingleAttendence from "../../components/RecentAttendence/SingleAttendence/SingleAttendence";
import "./ViewAttendence.css";
function ViewAttendence() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__veiw">
          <h1>View Attendence Record (5)</h1>
          <SingleAttendence att="Present" />
          <SingleAttendence att="Present" />
          <SingleAttendence att="Absent" />
          <SingleAttendence att="Present" />
          <SingleAttendence att="Absent" />
        </div>
      </div>
    </div>
  );
}

export default ViewAttendence;
