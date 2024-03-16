//display the list of orders with a sideBar allowing to filter the orders
//architecture of the page: set the styles of the page and the containers,
//+ display the main Containers components

import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import "./Orders.css";

//icon
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

//store
import { useOrdersStore } from "../../store/MainDatas/useOrdersStore";

//composant
import OrdersListContainer from "../../components/Orders/SectionOrderList/OrdersListContainer";
import SideBarContainer from "../../components/Orders/SideBar/SideBarContainer";
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

const Orders = () => {
  const [listGlobalOrdersSorted, setlistGlobalOrdersSorted] = useState<GlobalOrderFillWithDatasDto[]>([]);
  const [showSideBar, setshowSideBar] = useState(false);

  const { listGlobalOrders } = useOrdersStore();

  //update the list of orders sorted
  useEffect(() => {
    console.log("listGlobalOrders", listGlobalOrders);
    setlistGlobalOrdersSorted(listGlobalOrders);
  }, [listGlobalOrders]);

  return (
    //container page Orders
    <div className="pageOrders_container">
      {/* container sidebar */}
      <div className={`pageOrders_sideBar_container ${showSideBar ? "showSideBar" : ""}`}>
        <SideBarContainer listGlobalOrdersSorted={listGlobalOrdersSorted} setlistGlobalOrdersSorted={setlistGlobalOrdersSorted} listGlobalOrders={listGlobalOrders} />
        <div className="icon_sidebarContainer_absolute">
          <IconButton onClick={() => setshowSideBar((prev) => !prev)}>{showSideBar ? <DehazeIcon /> : <CloseIcon />}</IconButton>
        </div>
      </div>
      {/*container Orders */}
      <div className="pageOrders_listOrder_container">
        <OrdersListContainer listGlobalOrdersSorted={listGlobalOrdersSorted} />
      </div>
    </div>
  );
};

export default Orders;
