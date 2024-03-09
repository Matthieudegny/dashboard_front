import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, LinearProgress, Typography } from "@mui/material";

//store
import { useAuthStore } from "../../store/Login/useAuthStore";

function LinearProgressWithLabel() {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  const [progress, setProgress] = useState(10);

  //timer loading with visitor mode
  useEffect(() => {
    if (token !== "") return;
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && token === "") {
      console.log("redirect");
      navigate("/Home");
    }
  }, [progress]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ width: "95%", mr: 1, cursor: "wait" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box sx={{ minWidth: 35, cursor: "wait" }}>
        <Typography variant="body2" color="#ffffff">{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
