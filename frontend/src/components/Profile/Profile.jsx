import React from "react";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import AttendenceGrade from "./AttendenceGrade/AttendenceGrade";
function Profile() {
  const isAdmin = true;
  return (
    <div className="profile">
      {/* profile Header */}
      <ProfileHeader />
      {!isAdmin ? (
        <>
          <AttendenceGrade title="Attendence Record" />
          <AttendenceGrade title="Grade" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Profile;
