//Page Home
//display the balance of the user / total orders / Exposition
//display the chart of the balance's evolution of the user
import React from "react";
import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";

import "./Home.css";
import "../../style/index.css";

//store
import { useHomeStore } from "../../store/Home/useBalanceStore";

//hook
import { useGetHomeDatas } from "../../hook/Home/useGetHomeDatas";
import { useHomeChart } from "../../hook/Home/useHomeChart";

const Home = () => {
  //In case the page is reload, we need to fetch the datas again
  const {} = useGetHomeDatas();

  //get the datas about balance from the store
  const { balance, PrctExposition, totalOrders } = useHomeStore();

  //get the options of the chart
  const { option } = useHomeChart();

  return (
    <div className="grid-container">
      <div
        style={{
          animationDelay: "0.1s",
        }}
        className="grid-item item1 appearFromRight"
      >
        <Typography variant="h3">Total Balance:</Typography>
        <Typography variant="h2">{balance}$</Typography>
      </div>
      <div
        style={{
          animationDelay: "0.3s",
        }}
        className="grid-item item2 appearFromRight"
      >
        <Typography variant="h3">Total Trade:</Typography>
        <Typography variant="h2">{totalOrders}</Typography>
      </div>
      <div
        style={{
          animationDelay: "0.5s",
        }}
        className="grid-item item3 appearFromRight"
      >
        <Typography variant="h3">Exposition:</Typography>
        <Typography variant="h2">{PrctExposition}%</Typography>
      </div>
      <div
        style={{
          animationDelay: "0.7s",
        }}
        className="grid-item item4 fromOpacity0to1"
      >
        <ReactECharts option={option} style={{ height: "700px", width: "100%" }} />
      </div>
    </div>
  );
};

export default Home;
