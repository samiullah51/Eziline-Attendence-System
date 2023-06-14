import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import Profile from "../../components/Profile/Profile";
function HomePage() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents">
          {/* profile */}
          <Profile />

          {/* body */}
          <div className="body">
            <h1>this is body</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
