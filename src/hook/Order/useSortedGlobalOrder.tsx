import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

//model
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

export const useSortedGlobalOrder = (
  listGlobalOrdersSorted: GlobalOrderFillWithDatasDto[],
  setlistGlobalOrdersSorted: React.Dispatch<React.SetStateAction<GlobalOrderFillWithDatasDto[]>>,
  listGlobalOrders: GlobalOrderFillWithDatasDto[]
): {
  setSortConditionSelected: React.Dispatch<React.SetStateAction<"Date_ASC" | "Date_DESC" | "Result_ASC" | "Result_DESC">>;
  setdisplayConditionSelecetd: React.Dispatch<
    React.SetStateAction<{
      dateStart: Dayjs | null;
      dateEnd: Dayjs | null;
      typeLong: boolean;
      typeShort: boolean;
      statutInProgress: boolean;
      statutFullClosed: boolean;
    }>
  >;
  displayConditionSelecetd: {
    dateStart: Dayjs | null;
    dateEnd: Dayjs | null;
    typeLong: boolean;
    typeShort: boolean;
    statutInProgress: boolean;
    statutFullClosed: boolean;
  };
  sortConditionSelected: "Date_ASC" | "Date_DESC" | "Result_ASC" | "Result_DESC";
  oldestOrderDate: Dayjs | null;
} => {
  const [sortConditionSelected, setSortConditionSelected] = useState<"Date_ASC" | "Date_DESC" | "Result_ASC" | "Result_DESC">("Date_ASC");
  const [displayConditionSelecetd, setdisplayConditionSelecetd] = useState<{
    dateStart: Dayjs | null;
    dateEnd: Dayjs | null;
    typeLong: boolean;
    typeShort: boolean;
    statutInProgress: boolean;
    statutFullClosed: boolean;
  }>({
    dateStart: null,
    dateEnd: null,
    typeLong: true,
    typeShort: true,
    statutInProgress: true,
    statutFullClosed: true,
  });
  const [oldestOrderDate, setoldestOrderDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    console.log("oldestOrderDate", oldestOrderDate);
  }, [oldestOrderDate]);

  useEffect(() => {
    console.log("displayConditionSelecetd", displayConditionSelecetd);
  }, [displayConditionSelecetd]);

  // handle sort condition
  useEffect(() => {
    const sortGlobalOrders = (orders: GlobalOrderFillWithDatasDto[]) => {
      return orders.slice().sort((a, b) => {
        switch (sortConditionSelected) {
          case "Date_DESC":
            return dayjs(a.globalOrder.go_openDate).diff(dayjs(b.globalOrder.go_openDate));
          case "Date_ASC":
            return dayjs(b.globalOrder.go_openDate).diff(dayjs(a.globalOrder.go_openDate));
          case "Result_DESC":
            return a.globalOrder.go_result - b.globalOrder.go_result;
          case "Result_ASC":
            return b.globalOrder.go_result - a.globalOrder.go_result;
          default:
            return 0;
        }
      });
    };
    const sortedOrders = sortGlobalOrders(listGlobalOrdersSorted);
    setlistGlobalOrdersSorted(sortedOrders);
  }, [sortConditionSelected]);

  // handle display condition
  useEffect(() => {
    const filteredOrders = listGlobalOrders.filter((order) => {
      if (!displayConditionSelecetd.typeLong && order.globalOrder.go_direction === "LONG") {
        return false;
      }

      if (!displayConditionSelecetd.typeShort && order.globalOrder.go_direction === "SHORT") {
        return false;
      }

      if (!displayConditionSelecetd.statutInProgress && order.globalOrder.go_status) {
        return false;
      }

      if (!displayConditionSelecetd.statutFullClosed && !order.globalOrder.go_status) {
        return false;
      }
      if (displayConditionSelecetd.dateStart && displayConditionSelecetd.dateEnd && !dayjs(order.globalOrder.go_openDate).isBetween(displayConditionSelecetd.dateStart, displayConditionSelecetd.dateEnd)) {
        return false;
      }

      //if the date is not selected, we display all the orders
      return true;
    });

    setlistGlobalOrdersSorted(filteredOrders);
  }, [displayConditionSelecetd, listGlobalOrders]);

  //i get the oldest order and set its date as string from the initial list not the sorted one
  useEffect(() => {
    if (listGlobalOrders.length > 0) {
      const oldestOrder = listGlobalOrders.reduce((prev, current) => {
        return prev.globalOrder.go_openDate < current.globalOrder.go_openDate ? prev : current;
      });
      setoldestOrderDate(dayjs(oldestOrder.globalOrder.go_openDate).subtract(1, "day"));
    }
  }, [listGlobalOrders]);

  return { setSortConditionSelected, setdisplayConditionSelecetd, displayConditionSelecetd, sortConditionSelected, oldestOrderDate };
};
