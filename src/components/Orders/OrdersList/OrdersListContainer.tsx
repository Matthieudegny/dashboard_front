import React from "react";

import "./OrdersListContainer.css";

//store
import { useOrdersStore } from "../../../store/MainDatas/useOrdersStore";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

//component
import OrdersListItem from "./OrdersListItem";

const OrdersListContainer = () => {
  const { listGlobalOrders } = useOrdersStore();
  return (
    <div style={{ height: "100%", width: "calc(100% - 3vw)", paddingLeft: "3vw" }}>
      <div className="headerOrdersList_container">
        <div className="headerOrdersList_item">Open Date</div>
        <div className="headerOrdersList_item">Close Date</div>
        <div className="headerOrdersList_item">Asset</div>
        <div className="headerOrdersList_item">% Engaged</div>
        <div className="headerOrdersList_item">$ Engaged</div>
        <div className="headerOrdersList_item">Setups</div>
        <div className="headerOrdersList_item">Failures</div>
        <div className="headerOrdersList_item">Result</div>
      </div>
      {listGlobalOrders?.map((order: GlobalOrderFillWithDatasDto) => {
        const { globalOrder } = order;
        return <OrdersListItem key={globalOrder.go_id} order={order} />;
      })}
    </div>
  );
};

export default OrdersListContainer;
