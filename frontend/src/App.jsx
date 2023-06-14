import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router";
import MarkAttendence from "./pages/MarkAttendence/MarkAttendence";
import ViewAttendence from "./pages/ViewAttendence/ViewAttendence";
import LeaveRequest from "./pages/LeaveRequest/LeaveRequest";
import Presenties from "./pages/Presenties/Presenties";
import Absenties from "./pages/Absenties/Absenties";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/markatt" element={<MarkAttendence />} />
        <Route path="/veiwatt" element={<ViewAttendence />} />
        <Route path="/leaverequest" element={<LeaveRequest />} />
        <Route path="/presenties" element={<Presenties />} />
        <Route path="/absenties" element={<Absenties />} />
      </Routes>
    </>
  );
}

export default App;
