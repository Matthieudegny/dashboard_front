//loading for visitor and users
//visitor is redirected to home after 100% loading (time determined by the timer)
//users are redirected to the home page after the datasApp mutation is successful (time determined by the request)

import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

import "../../style/animations.css";

//store
import { useAuthStore } from "../../store/useAuthStore";

//composant
import LinearProgressWithLabel from "./LinearProgressWithLabel";

//hook
import { useGetDatas } from "../../hook/Login/useGetDatas";
import { useGetBalance } from "../../hook/Balance/useGetBalance";

const Loading = () => {
  const { token } = useAuthStore();
  //trigger the request to get the datas
  const {} = useGetDatas();
  //trigger the calculation of the balance
  const {} = useGetBalance();

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
          <CircularProgress size={100} />
        </Stack>
      )}
    </div>
  );
};

export default Loading;
