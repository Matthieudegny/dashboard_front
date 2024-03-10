//allow to get the options of the chart

//hook
import { useGetHomeDatas } from "../../hook/Home/useGetHomeDatas";

//store
import { useHomeStore } from "../../store/Home/useBalanceStore";

//model
import { IterationDataGridHomeXY } from "../../model/Home/model_Home";

export const useHomeChart = (): {
  option: any;
} => {
  //get the datas about balance from the store
  const { listIterationsBalance } = useHomeStore();

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
    // title: {
    //   text: "Balance evolution",
    //   left: "center",
    //   top: 0,
    //   textStyle: {
    //     color: "white",
    //     fontSize: 25,
    //     fontFamily: "Arial",
    //     fontWeight: "normal",
    //   },
    // },
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
        return `
        Trade n°${valueY} <br />
         Balance value ${valueX}$
         `;
      },
    },
    grid: {
      left: 80,
      right: 80,
      top: 10,
      bottom: 10,
    },
    series: [
      {
        data: returnYOptions(),
        type: "line",
        smooth: true,
      },
    ],
  };

  return { option };
};
