import React from "react";
import "./SectionOrderList.css";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

//component
import GlobalOrderItemContainer from "./GlobalOrderItemContainer";

const BodyOrderListContainer: React.FC<{
  listGlobalOrders: GlobalOrderFillWithDatasDto[];
  showAllSubOrdersList: boolean;
}> = ({ listGlobalOrders, showAllSubOrdersList }) => {
  return (
    <div className="body_orderList_container">
      {listGlobalOrders?.map((order: GlobalOrderFillWithDatasDto) => {
        const { globalOrder } = order;
        return <GlobalOrderItemContainer key={globalOrder.go_id} order={order} showAllSubOrdersList={showAllSubOrdersList} />;
      })}
    </div>
  );
};

export default BodyOrderListContainer;
