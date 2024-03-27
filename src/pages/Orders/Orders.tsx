//display the list of orders with a sideBar allowing to filter the orders
//architecture of the page: set the styles of the page and the containers,
//+ display the main Containers components

import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import "./Orders.css";

//icon
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";

//store
import { useOrdersStore } from "../../store/MainDatas/useOrdersStore";

//composant
import OrdersListContainer from "../../components/Orders/SECTION ORDER LIST/OrdersListContainer";
import SideBarContainer from "../../components/Orders/SECTION SIDE BAR/SideBarContainer";
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

const Orders = () => {
  const [listGlobalOrdersSorted, setlistGlobalOrdersSorted] = useState<GlobalOrderFillWithDatasDto[]>([]);
  const [showSideBar, setshowSideBar] = useState(false);

  const { listGlobalOrders } = useOrdersStore();

  //initialize the list of orders sorted
  useEffect(() => {
    setlistGlobalOrdersSorted(listGlobalOrders);
  }, [listGlobalOrders]);

  return (
    //containers page Order
    <div className="pageOrders_container" id="modal-creationOrder">
      {/* container sidebar */}
      <div className="pageOrders_sideBar_container">
        <SideBarContainer listGlobalOrdersSorted={listGlobalOrdersSorted} setlistGlobalOrdersSorted={setlistGlobalOrdersSorted} listGlobalOrders={listGlobalOrders} showSideBar={showSideBar} />
        <div className="icon_sidebarContainer_absolute">
          <IconButton onClick={() => setshowSideBar((prev) => !prev)}>{showSideBar ? <CloseIcon /> : <SettingsIcon />}</IconButton>
        </div>
      </div>
      {/*container Orders */}
      <OrdersListContainer listGlobalOrdersSorted={listGlobalOrdersSorted} />
    </div>
  );
};

export default Orders;
