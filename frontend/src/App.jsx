import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router";
import MarkAttendence from "./pages/MarkAttendence/MarkAttendence";
import ViewAttendence from "./pages/ViewAttendence/ViewAttendence";
import LeaveRequest from "./pages/LeaveRequest/LeaveRequest";
import Presenties from "./pages/Presenties/Presenties";
import Absenties from "./pages/Absenties/Absenties";
import LeaveDetails from "./pages/LeaveDetails/LeaveDetails";
import Students from "./pages/Students/Students";
import SingleStudentDetails from "./pages/SingleStudentDetails/SingleStudentDetails";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
function App() {
  const isAdmin = true;
  return (
    <>
      {/* <SignUp /> */}
      <SignIn />
      {/* {!isAdmin ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/markatt" element={<MarkAttendence />} />
          <Route path="/veiwatt" element={<ViewAttendence />} />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          <Route path="/presenties" element={<Presenties />} />
          <Route path="/absenties" element={<Absenties />} />
          <Route path="/leaverequest/:leaveId" element={<LeaveDetails />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<Students />} />
          <Route
            path="/students/:studentId"
            element={<SingleStudentDetails />}
          />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          <Route path="/leaverequest/:leaveId" element={<LeaveDetails />} />
        </Routes>
      )} */}
    </>
  );
}

export default App;
