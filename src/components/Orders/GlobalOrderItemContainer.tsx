import React, { useState, useEffect } from "react";

import "../../pages/Orders/Orders.css";

//model
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

//component
import GlobalOrderItem from "./GlobalOrderItem";
import SubOrderItem from "./SubOrderItem";

const GlobalOrderItemContainer: React.FC<{
  order: GlobalOrderFillWithDatasDto;
  showAllSubOrdersList: boolean;
}> = ({ order, showAllSubOrdersList }) => {
  const [showSubOrdeList, setshowSubOrdeList] = useState<boolean>(false);
  const subOrderListIsTrue = order.subOrderList.length > 0;

  useEffect(() => {
    if (showAllSubOrdersList) {
      setshowSubOrdeList(true);
    } else {
      setshowSubOrdeList(false);
    }
  }, [showAllSubOrdersList]);

  return (
    <div className="globalOrder_item">
      <GlobalOrderItem order={order} setshowSubOrdeList={setshowSubOrdeList} showSubOrdeList={showSubOrdeList} subOrderListIsTrue={subOrderListIsTrue} />
      <div
        className={`subOrders_list_container ${showSubOrdeList ? "show" : ""}`}
        style={{
          height: `${showSubOrdeList ? order.subOrderList.length * 5 : 0}vh`,
        }}
      >
        {order.subOrderList.map((subOrder) => {
          return <SubOrderItem key={subOrder.subOrder.so_id} subOrder={subOrder} />;
        })}
      </div>
    </div>
  );
};

export default GlobalOrderItemContainer;
