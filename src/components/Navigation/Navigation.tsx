import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

//styles
import "./Navigation.css";

//icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

//data
import { NavigationContent } from "../../data/NavigationContent";

const Navigation = () => {
  return (
    <div className="container_boutons_nav">
      {NavigationContent.map((item) => {
        return (
          <Link to={item.url} key={item.id}>
            <button className="bouton_nav">{item.name}</button>
          </Link>
        );
      })}
      <Button startIcon={<ExitToAppIcon />}></Button>
    </div>
  );
};

export default Navigation;
