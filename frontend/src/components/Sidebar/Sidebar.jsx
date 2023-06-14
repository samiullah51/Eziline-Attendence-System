import React from "react";
import "./Sidebar.css";
import logo from "../../assets/R.png";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          src="https://th.bing.com/th/id/R.5dd7dc23816207e44166922b39ac6dd1?rik=r9w4i8BqwH9wyg&riu=http%3a%2f%2fwww.eziline.com%2fwp-content%2fuploads%2flogo.png&ehk=jb2o%2f0gxopNSoXhws0UiLtiMszursCkuueLLGLbK4b4%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </div>

      {/* Sidebar Links */}
      <div className="sidebar__links">
        <NavLink to="/">
          <PersonOutlineIcon />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/markatt">
          <TaskAltIcon />
          <span>Mark Attendence</span>
        </NavLink>
        <NavLink to="/viewatt">View Attendence</NavLink>
        <NavLink to="/leaverequest">Leave Request</NavLink>
        <NavLink to="/presenties">Presenties</NavLink>
        <NavLink to="/absenties">Absenties</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
