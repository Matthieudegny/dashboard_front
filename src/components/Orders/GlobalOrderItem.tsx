import React from "react";

import "../../pages/Orders/Orders.css";

//model
import { GlobalOrderFillWithDatasDto } from "../../model/Order/model_order";

//utils
import { returnFormatDateDataGrid } from "../../utils/returnFormatDateDataGrid ";

//component
import { ColumnWithShowOptions } from "./ColumnWithShowOptions";
import { useReturnListFailureSetup } from "../../hook/Order/useReturnListFailureSetup";

const GlobalOrderItem: React.FC<{
  order: GlobalOrderFillWithDatasDto;
}> = ({ order }) => {
  const { globalOrder } = order;

  //hook return list failure and setup selected in the order
  const { returnSetupsListUsed, returnFailureListUsed } = useReturnListFailureSetup(order);

  return (
    <div className="order_item">
      <div className="OI_colum">{globalOrder.go_asset}</div>
      <div className="OI_colum">{globalOrder.go_direction}</div>
      <div className="OI_colum">{globalOrder.go_amountEngaged}</div>
      <div className="OI_colum">{globalOrder.go_status ? "Inprogress" : "Closed"}</div>
      <div className="OI_colum">{returnFormatDateDataGrid(globalOrder.go_openDate)}</div>
      <div className="OI_colum">{globalOrder.go_percentageEngaged}</div>
      <div className="OI_colum">{globalOrder.go_quantity}</div>
      <ColumnWithShowOptions returnListOptionUsed={() => returnSetupsListUsed()} title="Setups" subtitle="no setup" />
      <ColumnWithShowOptions returnListOptionUsed={() => returnFailureListUsed()} title="Failures" subtitle="no failure" />
      <div className="OI_colum">Result %</div>
      <div className="OI_colum">{globalOrder.go_result}</div>
    </div>
  );
};

export default GlobalOrderItem;
