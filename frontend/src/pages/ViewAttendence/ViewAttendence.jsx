import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";

function ViewAttendence() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__veiw">
          <RecentAttendence title="Attendence Records" />
        </div>
      </div>
    </div>
  );
}

export default ViewAttendence;
