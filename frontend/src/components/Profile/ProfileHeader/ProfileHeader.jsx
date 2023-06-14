import React from "react";
import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <div className="profile__header">
      {/* user info */}
      <img
        src="https://th.bing.com/th/id/OIP.OipeUJzND5tgNZVYF91-qgAAAA?pid=ImgDet&w=300&h=300&rs=1"
        alt=""
      />
      <p>Samiullah</p>
      <h2>MERN Stack Developer</h2>
      <p>Peshawar, Pakistan</p>

      {/* Actions */}
      <div className="actions">
        <Link to="/markatt" style={{ backgroundColor: "rgb(4, 148, 47)" }}>
          Mark Attendence
        </Link>
        <Link to="/veiwatt" style={{ backgroundColor: "rgb(11, 32, 90)" }}>
          View Attendence
        </Link>
        <Link to="/leaverequest" style={{ backgroundColor: "rgb(7, 66, 134)" }}>
          Leave Request
        </Link>
      </div>
    </div>
  );
}

export default ProfileHeader;
