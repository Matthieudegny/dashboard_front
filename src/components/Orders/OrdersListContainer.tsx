import React from "react";

import "../../pages/Orders/Orders.css";

//store
import { useOrdersStore } from "../../store/MainDatas/useOrdersStore";

//component
import BodyOrderListContainer from "./BodyOrderListContainer";
import HeaderOrderListContainer from "./HeaderOrderListContainer";

const OrdersListContainer = () => {
  const { listGlobalOrders } = useOrdersStore();
  return (
    <div className="ordersListContainer">
      <HeaderOrderListContainer />
      <BodyOrderListContainer listGlobalOrders={listGlobalOrders} />
    </div>
  );
};

export default OrdersListContainer;
