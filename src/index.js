import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import TeacherDashboard from "./Pages/TeacherDashboard/TeacherDashboard";
import ViewHomeWork from "./Pages/HomeWork/ViewHomeWork";
import CreateHomeWork from "./Pages/HomeWork/CreateHomeWork";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import TeacherViewWork from "./Pages/HomeWork/TeacherViewWork";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/teacher" element={<TeacherDashboard />}>
      <Route path="create-homework" element={<CreateHomeWork />} />
      <Route path="view-homework" element={<TeacherViewWork />} />
      <Route path="view-homework/:id" element={<TeacherViewWork />} />


      </Route>
      <Route path="/student" element={<StudentDashboard />}>
      <Route path="view-homework" element={<ViewHomeWork />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
