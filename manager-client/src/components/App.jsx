import React from "react";
import HomePage from "./HomePage.jsx";
import Navbar from "./Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Days from "./Days";
import Calendar from "./Calender";
import Timer from "./Timer";
import Login from "./LoginPage";
import SignUp from "./SignUp.jsx";
import NeedLogin from "./NeedLogin";
import useUser from "../hooks/User.js";

function App() {
  const { user, isLoading } = useUser();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/weekly-planner"
          element={user ? <Days /> : <NeedLogin />}
        />
        <Route
          path="/important-date"
          element={user ? <Calendar /> : <NeedLogin />}
        />
        <Route path="/timer" element={user ? <Timer /> : <NeedLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
