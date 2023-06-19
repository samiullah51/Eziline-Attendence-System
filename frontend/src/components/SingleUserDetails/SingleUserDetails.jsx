import React from "react";
import "./SingleUserDetails.css";
import RecentAttendence from "../RecentAttendence/RecentAttendence";
function SingleUserDetails() {
  return (
    <div className="single__user__details">
      {/* {/* user info/} */}
      <div className="user__info">
        {/* user header */}
        <div className="user__header">
          <img
            src="https://th.bing.com/th/id/OIP.1gpDQEoMd-EV0-G1pD-6sAHaEK?pid=ImgDet&rs=1"
            alt=""
          />
          <p>Samiullah</p>
          {/* create report */}
        </div>
        {/* user body */}
        <p className="user__body">MERN Stack Developer</p>
        {/* user footer */}
        <div className="user__footer">
          <p className="att__per">90%</p>
          <p className="att__per">A</p>
          <button>Create Report</button>
        </div>
      </div>
      {/* attendense record */}
      <RecentAttendence title="Attendence Record" />
    </div>
  );
}

export default SingleUserDetails;
