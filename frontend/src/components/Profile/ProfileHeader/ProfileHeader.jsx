import React, { useState } from "react";
import { Link } from "react-router-dom";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
function ProfileHeader() {
  const [image, setImage] = useState(null);
  const isAdmin = true;
  const handleChange = (image) => {
    setImage(URL.createObjectURL(image));
  };
  return (
    <div className="profile__header">
      {/* user info */}
      <div className="user__info">
        {!image ? (
          <img
            src="https://th.bing.com/th/id/OIP.OipeUJzND5tgNZVYF91-qgAAAA?pid=ImgDet&w=300&h=300&rs=1"
            alt=""
          />
        ) : (
          <img src={image} alt="" />
        )}
        <label htmlFor="image" className="icon">
          <input
            type="file"
            id="image"
            onChange={(e) => handleChange(e.target.files[0])}
          />
          <CameraAltOutlinedIcon />
        </label>
      </div>
      {/* update btn */}
      {image && <button className="update__btn">Update Now</button>}
      {isAdmin && (
        <span
          style={{
            fontWeight: "bold",
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Admin
        </span>
      )}
      <p>Samiullah</p>
      <h2>MERN Stack Developer</h2>
      <p>Peshawar, Pakistan </p>

      {/* Actions */}
      {!isAdmin ? (
        <div className="actions">
          <Link to="/markatt" style={{ backgroundColor: "rgb(4, 148, 47)" }}>
            Mark Attendence
          </Link>
          <Link to="/veiwatt" style={{ backgroundColor: "rgb(11, 32, 90)" }}>
            View Attendence
          </Link>
          <Link
            to="/leaverequest"
            style={{ backgroundColor: "rgb(7, 66, 134)" }}
          >
            Leave Request
          </Link>
        </div>
      ) : (
        <div className="actions">
          <Link to="/markatt" style={{ backgroundColor: "rgb(4, 148, 47)" }}>
            Create Report
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
