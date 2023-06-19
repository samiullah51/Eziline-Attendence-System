import React from "react";
import "./Students.css";
import SingleStudent from "./SingleStudent/SingleStudent";
function Students() {
  return (
    <div className="all__students">
      <h1>All Students</h1>
      <SingleStudent />
      <SingleStudent />
    </div>
  );
}

export default Students;
