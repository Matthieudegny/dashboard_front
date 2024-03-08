//1. at each listGlobalOrders updates, we calculate the balance of the wallet
//2. and determine the exposure of the user

import { useEffect } from "react";

//store
import { useOrdersStore } from "../../store/useOrdersStore";
import { useBalanceStore } from "../../store/useBalanceStore";

//model
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

export const useGetBalance = () => {
  const { listGlobalOrders, setListGlobalOrders } = useOrdersStore();
  const { balance, setBalance, setListIterationsBalance, setPrctExposition, setTotalOrders } = useBalanceStore();

  useEffect(() => {
    calculateExposureWallet();
    calculateBalanceOfPositions(listGlobalOrders);
    setTotalOrders(listGlobalOrders.length);
  }, [listGlobalOrders]);

  //1. Function to calculate balance of positions
  const calculateBalanceOfPositions = (orders: Array<GlobalOrderFillWithDatasDto>) => {
    let listBalanceOfPositions: { id: number; result: number }[] = [];
    let balance = 0;

    // Loop through orders
    for (const order of orders) {
      balance += +order.globalOrder.go_result; // Update balance
      listBalanceOfPositions.push({ id: order.globalOrder.go_id, result: balance }); // Push balance of position
    }

    // Set balance
    setBalance(balance);
    setListIterationsBalance(listBalanceOfPositions);
  };

  //2. Function to determine the exposure of the user
  //i ctach all the orders opened
  //if one global order is opened, i check if it contains some sub orders (sub order have already been filled)
  //then i obtain the total amount of exposure
  const calculateExposureWallet = () => {
    let totalExposure = 0;
    //Calculate exposure
    listGlobalOrders?.map((order) => {
      //1. if the global order is opened i get the amount engaged
      let exposureGlobalOrder = 0;
      if (order.globalOrder.go_status === true) {
        exposureGlobalOrder += order.globalOrder.go_amountEngaged;
        if (order.subOrderList.length > 0) {
          //2. if the global order contains sub orders, i get the total amount of sub orders already filled
          let totalAmountSubOrderAlreadyFilled = 0;
          order.subOrderList.map((subOrder) => {
            if (subOrder.subOrder.so_status === true) totalAmountSubOrderAlreadyFilled -= subOrder.subOrder.so_amountEngaged;
          });
          //2.1 and i update the exposure of the global order
          exposureGlobalOrder -= totalAmountSubOrderAlreadyFilled;
        }
      }
      //3. i update the total exposure
      totalExposure += exposureGlobalOrder;
    });

    //Calcul pourcecentage of exposure
    let percentageExposure = (totalExposure / balance) * 100;
    setPrctExposition(percentageExposure);
  };

  return { listGlobalOrders, setListGlobalOrders };
};
