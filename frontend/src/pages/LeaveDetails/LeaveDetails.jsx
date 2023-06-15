import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./LeaveDetails.css";
import RecentLeaves from "../../components/RecentLeaves/RecentLeaves";
import { Link } from "react-router-dom";
function LeaveDetails() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__leave">
          <div className="leave__header">
            <h1>Leave for Urgent</h1>
            <p className="leave__status">Pending</p>
          </div>
          {/* leave description */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius aperiam culpa rerum libero illum eligendi quisquam obcaecati
            sit sapiente debitis fugit pariatur voluptate, rem eos reprehenderit
            sed ipsa dignissimos?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius aperiam culpa rerum libero illum eligendi quisquam obcaecati
            sit sapiente debitis fugit pariatur voluptate, rem eos reprehenderit
            sed ipsa dignissimos?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius aperiam culpa rerum libero illum eligendi quisquam obcaecati
            sit sapiente debitis fugit pariatur voluptate, rem eos reprehenderit
            sed ipsa dignissimos?
          </p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eius aperiam culpa rerum libero illum eligendi quisquam obcaecati
            sit sapiente debitis fugit pariatur voluptate, rem eos reprehenderit
            sed ipsa dignissimos?
          </p>
          {/* back btn*/}
          <Link className="backbtn" to="/leaverequest">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeaveDetails;
