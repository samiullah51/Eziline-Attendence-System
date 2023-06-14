import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents">
          <h1>hellowss orld</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
