import React, { useState } from "react";

import "./OrdersListItem.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

//component
import GlobalOrderItem from "./GlobalOrderItem";

const OrdersListItem: React.FC<{ order: GlobalOrderFillWithDatasDto }> = ({ order }) => {
  const [showListSubOrders, setShowListSubOrders] = useState(false);

  const listSubOrdersisTrure = order.subOrderList.length > 0;

  console.log("order", order);

  return (
    <div>
      {listSubOrdersisTrure ? <ExpandMoreIcon /> : null}
      <GlobalOrderItem order={order} />
    </div>
  );
};

export default OrdersListItem;
