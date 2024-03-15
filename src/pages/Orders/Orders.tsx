//display the list of orders with a sideBar allowing to filter the orders
//architecture of the page: set the styles of the page and the containers,
//+ display the main Containers components

import React from "react";
import "./Orders.css";

//composant
import OrdersListContainer from "../../components/Orders/OrdersListContainer";

const Orders = () => {
  return (
    //container page Orders
    <div className="pageOrders_container">
      {/* container sidebar */}
      <div className="pageOrders_sideBar_container">SideBar</div>
      {/*container Orders */}
      <div className="pageOrders_listOrder_container">
        <OrdersListContainer />
      </div>
    </div>
  );
};

export default Orders;
