//Page Home
//display the balance of the user / total orders / Exposition
//display the chart of the balance's evolution of the user
import React from "react";
import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";

import "./Home.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

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
    console.log("listY", listY);
    return listY;
  };

  const option = {
    title: {
      text: "Balance evolution",
      left: "center",
      top: "10px",
      textStyle: {
        color: "white",
        fontSize: 25,
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    },
    xAxis: {
      type: "category",
      data: returnXOptions(),
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
      right: 20,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params: any) {
        var valueX = params[0].value;
        var valueY = params[0].axisValue;
        return `Trade n°${valueY} <br />
         Balance value ${valueX}$`;
      },
    },
    grid: {
      left: 80,
      right: 80,
      top: 80,
      bottom: 40,
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
