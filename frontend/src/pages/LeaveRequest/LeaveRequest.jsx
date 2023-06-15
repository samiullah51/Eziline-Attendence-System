import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./LeaveRequest.css";
import RecentLeaves from "../../components/RecentLeaves/RecentLeaves";
function LeaveRequest() {
  return (
    <div className="home__page">
      <Sidebar />
      <div className="home__contents">
        <Navbar />
        <div className="contents__leave">
          <h1>Leave Request</h1>
          {/* leave form */}
          <div className="leave__form">
            <div className="single__input">
              <label htmlFor="">Subject</label>
              <input type="text" autoFocus />
            </div>
            <div className="single__input">
              <label htmlFor="">Description</label>
              <textarea></textarea>
            </div>
            {/* buttons */}
            <div className="btns">
              <button className="cancel">Cancel</button>
              <button className="send">Send Request</button>
            </div>
          </div>
          {/* previous leave request */}
          <RecentLeaves />
        </div>
      </div>
    </div>
  );
}

export default LeaveRequest;
