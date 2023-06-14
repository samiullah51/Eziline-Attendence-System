import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import Profile from "../../components/Profile/Profile";
import Cards from "../../components/Cards/Cards";
import RecentLeaves from "../../components/RecentLeaves/RecentLeaves";
import RecentAttendence from "../../components/RecentAttendence/RecentAttendence";
function HomePage() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents">
          <Profile />

          <div className="body">
            {/* Cards */}
            <Cards />
            {/* recent attendence */}
            <RecentAttendence />
            {/* recent leaves */}
            <RecentLeaves />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
