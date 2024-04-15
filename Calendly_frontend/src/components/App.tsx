import React from "react";
import "../assets/css/App.css";
import Navbar from "./Navbar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login.tsx";
import Home from "../Pages/Home.tsx";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
