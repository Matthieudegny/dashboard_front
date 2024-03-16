import React, { useState } from "react";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../../../pages/Orders/Orders.css";

//icons
import AddIcon from "@mui/icons-material/Add";

//store
import { useOrdersStore } from "../../../store/MainDatas/useOrdersStore";

//component
import BodyOrderListContainer from "./BodyOrderListContainer";
import HeaderOrderListContainer from "./HeaderOrderListContainer";

const OrdersListContainer = () => {
  const [showAllSubOrdersList, setshowAllSubOrdersList] = useState(false);
  const { listGlobalOrders } = useOrdersStore();
  return (
    <div className="ordersListContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControlLabel control={<Checkbox value={showAllSubOrdersList} onChange={() => setshowAllSubOrdersList((prev) => !prev)} />} label="Show all sub-orders" />
        <Button>
          <AddIcon sx={{ pr: 0.5 }} />
          Create Order
        </Button>
      </div>
      <HeaderOrderListContainer />
      <BodyOrderListContainer listGlobalOrders={listGlobalOrders} showAllSubOrdersList={showAllSubOrdersList} />
    </div>
  );
};

export default OrdersListContainer;
