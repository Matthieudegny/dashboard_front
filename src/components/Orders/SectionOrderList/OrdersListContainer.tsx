import React, { useState } from "react";

import "./SectionOrderList.css";

//component
import BodyOrderListContainer from "./BodyOrderListContainer";
import HeaderOrderListContainer from "./HeaderOrderListContainer";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

const OrdersListContainer: React.FC<{
  listGlobalOrdersSorted: GlobalOrderFillWithDatasDto[];
}> = ({ listGlobalOrdersSorted }) => {
  const [showAllSubOrdersList, setshowAllSubOrdersList] = useState(false);
  return (
    <div className="ordersListContainer">
      <HeaderOrderListContainer setshowAllSubOrdersList={setshowAllSubOrdersList} showAllSubOrdersList={showAllSubOrdersList} />
      <BodyOrderListContainer listGlobalOrdersSorted={listGlobalOrdersSorted} showAllSubOrdersList={showAllSubOrdersList} />
    </div>
  );
};

export default OrdersListContainer;
