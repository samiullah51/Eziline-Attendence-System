import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";
import AllStudents from "../../components/Students/Students";
import "./Absenties.css";
import SingleUserDetails from "../../components/SingleUserDetails/SingleUserDetails";
function SingleStudentDetails() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__absenties">
          <SingleUserDetails />
        </div>
      </div>
    </div>
  );
}

export default SingleStudentDetails;
