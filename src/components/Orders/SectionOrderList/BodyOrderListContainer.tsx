import React from "react";
import "./SectionOrderList.css";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

//component
import GlobalOrderItemContainer from "./GlobalOrderItemContainer";

const BodyOrderListContainer: React.FC<{
  listGlobalOrdersSorted: GlobalOrderFillWithDatasDto[];
  showAllSubOrdersList: boolean;
}> = ({ listGlobalOrdersSorted, showAllSubOrdersList }) => {
  return (
    <div className="body_orderList_container">
      {listGlobalOrdersSorted?.map((order: GlobalOrderFillWithDatasDto, index) => {
        const { globalOrder } = order;
        return <GlobalOrderItemContainer key={globalOrder.go_id} order={order} showAllSubOrdersList={showAllSubOrdersList} delay={index} />;
      })}
    </div>
  );
};

export default BodyOrderListContainer;
