//Page Home
//display the balance of the user / total orders / Exposition
//display the chart of the balance's evolution of the user
import React from "react";
import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";

import "./Home.css";

//store
import { useHomeStore } from "../../store/Home/useBalanceStore";

//hook
import { useGetHomeDatas } from "../../hook/Home/useGetHomeDatas";

//model
import { IterationDataGridHomeXY } from "../../model/Home/model_Home";

const Home = () => {
  //In case the page is reload, we need to fetch the datas again
  const {} = useGetHomeDatas();

  //get the datas about balance from the store
  const { balance, listIterationsBalance, PrctExposition, totalOrders } = useHomeStore();

  const returnXOptions = () => {
    const listX: number[] = [];
    listIterationsBalance?.map((item: IterationDataGridHomeXY) => {
      listX.push(item.index);
    });
    return listX;
  };

  const returnYOptions = () => {
    const listY: number[] = [];
    listIterationsBalance?.map((item: IterationDataGridHomeXY) => {
      listY.push(item.value);
    });
    return listY;
  };

  const option = {
    xAxis: {
      type: "category",
      data: returnXOptions(),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: returnYOptions(),
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <Typography variant="h3">Total Balance:</Typography>
        <Typography variant="h2">{balance}$</Typography>
      </div>
      <div className="grid-item item2">
        <Typography variant="h3">Total Trade:</Typography>
        <Typography variant="h2">{totalOrders}</Typography>
      </div>
      <div className="grid-item item3">
        <Typography variant="h3">Exposition:</Typography>
        <Typography variant="h2">{PrctExposition}%</Typography>
      </div>
      <div className="grid-item item4">
        <ReactECharts option={option} style={{ height: "700px", width: "100%" }} />
      </div>
    </div>
  );
};

export default Home;
