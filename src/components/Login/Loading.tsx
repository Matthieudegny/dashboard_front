//loading for visitor and users
//visitor is redirected to home after 100% loading (time determined by the timer)
//users are redirected to the home page after the datasApp mutation is successful (time determined by the request)
//Main goal of this component is to show a loading screen while the user is being redirected to the home page and while the datas are fetching

import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

import "../../style/animations.css";

//store
import { useAuthStore } from "../../store/Login/useAuthStore";

//composant
import LinearProgressWithLabel from "./LinearProgressWithLabel";

//hook
import { useGetDatas } from "../../hook/Login/useGetDatas";
import { useGetHomeDatas } from "../../hook/Home/useGetHomeDatas";

const Loading = () => {
  const { token } = useAuthStore();
  //trigger the request to get the datas
  const {} = useGetDatas();
  //trigger the calculation of the balance
  const {} = useGetHomeDatas();

  return (
    <div
      style={{
        height: "100%",
        width: "100vw",
      }}
      className="fromOpacity0to1"
    >
      {token === "" ? (
        <>
          <LinearProgressWithLabel />
        </>
      ) : (
        <Stack sx={{ display: "flex", height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
          <CircularProgress size={100} sx={{ cursor: "wait" }} />
        </Stack>
      )}
    </div>
  );
};

export default Loading;
