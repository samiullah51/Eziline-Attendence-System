import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
function SingleLeave({ status, bg }) {
  const isAdmin = true;
  const [showPop, setShowPop] = useState(false);
  return (
    <div className="single__attendence">
      <p>12-June-2023</p>
      <p className="subject">Leave for Urgent</p>
      <p>Leave for urgent details...</p>
      <Link className="details__view" to="/leaverequest/sdf">
        View
      </Link>
      <p className="status" style={{ backgroundColor: bg }}>
        {status}
      </p>
      {isAdmin && (
        <div className="papup">
          <MoreVertIcon onClick={() => setShowPop(!showPop)} />
          {showPop && (
            <div className="papup__content">
              <p>Reject</p>
              <p>Delete</p>
              <CloseIcon onClick={() => setShowPop(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleLeave;
