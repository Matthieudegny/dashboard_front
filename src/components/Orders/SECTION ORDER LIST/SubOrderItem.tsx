import React from "react";

import "./SectionOrderList.css";

//utils
import { returnFormatDateDataGrid } from "../../../utils/returnFormatDateDataGrid ";
import { SubOrderFillWithDatasDto } from "../../../model/Order/model_order";

//hook
import { useReturnListFailureSetup } from "../../../hook/Order/useReturnListFailureSetup";

//component
import { ColumnWithShowOptions } from "./ColumnWithShowOptions";

const SubOrderItem: React.FC<{
  subOrder: SubOrderFillWithDatasDto;
}> = ({ subOrder }) => {
  const { returnSetupsListUsed, returnFailureListUsed } = useReturnListFailureSetup(subOrder);

  return (
    <div className="order_item">
      <div className="OI_colum"></div>
      <div className="OI_colum"></div>
      <div className="OI_colum"></div>
      <div className="OI_colum"></div>
      <div className="OI_colum">{returnFormatDateDataGrid(subOrder.subOrder.so_closeDate)}</div>
      <div className="OI_colum">{subOrder.subOrder.so_amountEngaged}</div>
      <div className="OI_colum">{subOrder.subOrder.so_quantity}</div>
      <ColumnWithShowOptions returnListOptionUsed={() => returnSetupsListUsed()} title="Setups" />
      <ColumnWithShowOptions returnListOptionUsed={() => returnFailureListUsed()} title="Failures" />
      <div className="OI_colum">{subOrder.subOrder.so_result}</div>
      <div className="OI_colum">{subOrder.subOrder.so_result}</div>
    </div>
  );
};

export default SubOrderItem;
