import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import Login from "@/components/Login";

const HomeRoutes: React.FC = () => (
  <div className="min-h-screen bg-primary">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default HomeRoutes;
