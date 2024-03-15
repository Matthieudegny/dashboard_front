import React from "react";

//model
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

//component
import GlobalOrderItemContainer from "./GlobalOrderItemContainer";

const BodyOrderListContainer: React.FC<{
  listGlobalOrders: GlobalOrderFillWithDatasDto[];
}> = ({ listGlobalOrders }) => {
  return (
    <div className="body_orderList_container">
      {listGlobalOrders?.map((order: GlobalOrderFillWithDatasDto) => {
        const { globalOrder } = order;
        return <GlobalOrderItemContainer key={globalOrder.go_id} order={order} />;
      })}
    </div>
  );
};

export default BodyOrderListContainer;
