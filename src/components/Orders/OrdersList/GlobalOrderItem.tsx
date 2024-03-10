import React from "react";

import "./OrdersListItem.css";

//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";
import { SetupType } from "../../../model/Categories/model_catgories";

//utils
import { returnFormatDateDataGrid } from "../../../utils/returnFormatDateDataGrid ";

const GlobalOrderItem: React.FC<{ order: GlobalOrderFillWithDatasDto }> = ({ order }) => {
  const { globalOrder } = order;

  const returnSetupsListUsed = () => {
    // Supposons que `order.setupGo` est un tableau d'objets de type SetupType
    return order?.setupGo.map((setup: SetupType) => {
      return (
        <div className="iterationListSetup_Options_item" key={setup.setup_id}>
          <CheckBoxIcon sx={{ fontSize: "15px", color: "#0eb0fb" }} />
          {setup.setup_title}
        </div>
      );
    });
  };

  const returnFailureListUsed = () => {
    return order?.failureGo.map((failure) => {
      return (
        <div className="iterationListSetup_Options_item" key={failure.failure_id}>
          <CheckBoxIcon sx={{ fontSize: "15px", color: "#0eb0fb" }} />
          {failure.failure_title}
        </div>
      );
    });
  };
  return (
    <div className="OrdersListItem_container">
      <div className="OrdersListItem_iteration">{returnFormatDateDataGrid(globalOrder.go_openDate)}</div>
      <div className="OrdersListItem_iteration">{returnFormatDateDataGrid(globalOrder.go_closeDate)}</div>
      <div className="OrdersListItem_iteration">{globalOrder.go_asset}</div>
      <div className="OrdersListItem_iteration">{globalOrder.go_percentageEngaged}</div>
      <div className="OrdersListItem_iteration">{globalOrder.go_amountEngaged}</div>
      <div className="OrdersListItem_iteration">
        <div className="OrdersListItem_iteration ">
          <div className="iterationListSetup_Select">
            {returnSetupsListUsed()?.length > 0 ? (
              <div className="iterationListSetup_Select_title">
                <span>Setups</span>
                <ExpandMoreIcon />
              </div>
            ) : (
              "no setup"
            )}
            <div className="iterationListSetup_Options_Container">{returnSetupsListUsed()}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="OrdersListItem_iteration">
          <div className="iterationListSetup_Select">
            {returnFailureListUsed()?.length > 0 ? (
              <div className="iterationListSetup_Select_title">
                <span>Failures</span>
                <ExpandMoreIcon />
              </div>
            ) : (
              "no failure"
            )}
            <div className="iterationListSetup_Options_Container">{returnFailureListUsed()}</div>
          </div>
        </div>
      </div>

      <div className="OrdersListItem_iteration">{globalOrder.go_result}</div>
    </div>
  );
};

export default GlobalOrderItem;
