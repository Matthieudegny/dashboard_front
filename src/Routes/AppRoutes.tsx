import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

//style
import "./AppRoutes.css";

//components
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Navigation from "@/components/Navigation/Navigation";

//hook
import { useDetectionToken } from "@/hook/Login/useDetectionToken";

const AppRoutes = () => {
  const location = useLocation();
  //if token is available, the datas are loaded
  const {} = useDetectionToken();

  return (
    <div>
      <div>{location.pathname !== "/Login" && location.pathname !== "/" ? <Navigation /> : null}</div>
      <div className="main_container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
