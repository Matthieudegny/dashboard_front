import React, { useState } from "react";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./SectionOrderList.css";

//icons
import AddIcon from "@mui/icons-material/Add";

//component
import ModalCreationOrder from "../ModalCreationOrder";

const HeaderOrderListContainer: React.FC<{
  setshowAllSubOrdersList: React.Dispatch<React.SetStateAction<boolean>>;
  showAllSubOrdersList: boolean;
}> = ({ setshowAllSubOrdersList, showAllSubOrdersList }) => {
  const [showModalCreationOrder, setshowModalCreationOrder] = useState(false);
  return (
    <div className="headerOrdersList_container fromOpacity0to1">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1.5vh",
        }}
      >
        <FormControlLabel
          control={<Checkbox value={showAllSubOrdersList} onChange={() => setshowAllSubOrdersList((prev) => !prev)} />}
          label={`${showAllSubOrdersList ? "Hidden sub orders" : "Show sub orders"}`}
          className="checkbox_showAllSubOrders"
          sx={{ marginLeft: "0.1vh" }}
        />
        <Button onClick={() => setshowModalCreationOrder(true)}>
          <AddIcon sx={{ pr: 0.5 }} />
          Create Order
        </Button>
        <ModalCreationOrder showModalCreationOrder={showModalCreationOrder} setshowModalCreationOrder={setshowModalCreationOrder} />
      </div>
      <div
        style={{
          color: "#15c5e0",
        }}
        className="order_item"
      >
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
    </div>
  );
};

export default HeaderOrderListContainer;
