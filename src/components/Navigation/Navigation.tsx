import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";

//styles
import "./Navigation.css";

//icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

//data
import { NavigationContent } from "../../data/NavigationContent";

//store
import { useAuthStore } from "../../store/Login/useAuthStore";

const Navigation = () => {
  const navigate = useNavigate();
  const { setToken, setIdUser, setIsLoggedIn } = useAuthStore();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIdUser(0);
    setToken("");
    setIsLoggedIn(false);
    navigate("/");
  };

  const checkIfLinkIsActive = (url: string) => {
    if (window.location.pathname === url) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        height: "8vh",
      }}
    >
      <div className="container_boutons_nav">
        {NavigationContent.map((item) => {
          return (
            <Link to={item.url} key={item.id}>
              <button className={`bouton_nav ${checkIfLinkIsActive(item.url) ? "linkActive" : ""}`}>{item.name}</button>
            </Link>
          );
        })}
      </div>
      <div
        style={{
          marginRight: "2vh",
        }}
      >
        <IconButton onClick={handleLogOut}>
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navigation;
