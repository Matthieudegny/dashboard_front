import React from "react";
import "../../pages/Orders/Orders.css";

const HeaderOrderListContainer = () => {
  return (
    <div className="order_item">
      <div className="OI_colum">Asset</div>
      <div className="OI_colum">Type</div>
      <div className="OI_colum">Qty $</div>
      <div className="OI_colum">Statut</div>
      <div className="OI_colum">Open Date</div>
      <div className="OI_colum">% Engaged</div>
      <div className="OI_colum">Qty Asset</div>
      <div className="OI_colum">Setups</div>
      <div className="OI_colum">Failures</div>
      <div className="OI_colum">Result %</div>
      <div className="OI_colum">Result $</div>
    </div>
  );
};

export default HeaderOrderListContainer;
