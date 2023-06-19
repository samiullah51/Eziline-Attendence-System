import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
function SingleAttendence({ att }) {
  const isAdmin = true;
  const [showPop, setShowPop] = useState(false);
  return (
    <div className="single__attendence">
      <p>13-June-2023</p>
      <p
        className="status"
        style={{ backgroundColor: att === "Present" ? "green" : "red" }}
      >
        {att}
      </p>
      {isAdmin && (
        <div className="papup">
          <MoreVertIcon onClick={() => setShowPop(!showPop)} />
          {showPop && (
            <div className="papup__content" style={{ width: "130px" }}>
              <p>Mark as Present</p>
              <p>Delete</p>
              <CloseIcon onClick={() => setShowPop(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleAttendence;
