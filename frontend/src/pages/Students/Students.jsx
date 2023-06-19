import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";
import AllStudents from "../../components/Students/Students";
import "./Absenties.css";
function Students() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__absenties">
          <AllStudents />
        </div>
      </div>
    </div>
  );
}

export default Students;
