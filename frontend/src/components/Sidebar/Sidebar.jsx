import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import CancelIcon from "@mui/icons-material/Cancel";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
function Sidebar() {
  const isAdmin = true;
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      {/* Sidebar Links */}
      {!isAdmin ? (
        <div className="sidebar__links">
          <NavLink to="/">
            <PersonOutlineIcon />
            <span>Profile</span>
          </NavLink>
          <NavLink to="/markatt">
            <TaskAltIcon />
            <span>Mark Attendence</span>
          </NavLink>
          <NavLink to="/veiwatt">
            <RemoveRedEyeOutlinedIcon />
            <span>View Attendence</span>
          </NavLink>
          <NavLink to="/leaverequest">
            <SelfImprovementOutlinedIcon />
            <span>Leave Request</span>
          </NavLink>
          <NavLink to="/presenties">
            <DomainVerificationIcon />
            <span>Presenties</span>
          </NavLink>
          <NavLink to="/absenties">
            <CancelIcon />
            <span>Absenties</span>
          </NavLink>
        </div>
      ) : (
        <div className="sidebar__links">
          <NavLink to="/">
            <PersonOutlineIcon />
            <span>Admin</span>
          </NavLink>
          <NavLink to="/students">
            <SchoolOutlinedIcon />
            <span>Students</span>
          </NavLink>
          <NavLink to="/leaverequest">
            <SelfImprovementOutlinedIcon />
            <span>Leave Request</span>
          </NavLink>
          <NavLink to="/report">
            <DocumentScannerOutlinedIcon />
            <span>Report</span>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
