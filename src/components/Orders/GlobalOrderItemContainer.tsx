import React from "react";

import "../../pages/Orders/Orders.css";

//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

//model
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

//component
import GlobalOrderItem from "./GlobalOrderItem";
import SubOrderItem from "./SubOrderItem";

const GlobalOrderItemContainer: React.FC<{ order: GlobalOrderFillWithDatasDto }> = ({ order }) => {
  return (
    <div className="globalOrder_item">
      <GlobalOrderItem order={order} />
      <div className="subOrders_list_container">
        {order.subOrderList.map((subOrder) => {
          return <SubOrderItem key={subOrder.subOrder.so_id} subOrder={subOrder} />;
        })}
      </div>
    </div>
  );
};

export default GlobalOrderItemContainer;
