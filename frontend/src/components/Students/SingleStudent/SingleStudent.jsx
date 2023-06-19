import React from "react";
import AttendenceGrade from "../../Profile/AttendenceGrade/AttendenceGrade";

function SingleStudent() {
  return (
    <div className="single__student">
      <img src="https://th.bing.com/th/id/R.dfb70474d8c03a883dd7b9d586eb4954?rik=nG%2f9chEmbDiT%2bw&pid=ImgRaw&r=0" />
      <p>Samiullah</p>
      <p>
        <b>MERN Stack Developer</b>
      </p>
      <p className="att__per">90%</p>
      <p className="att__grade">A</p>
    </div>
  );
}

export default SingleStudent;
