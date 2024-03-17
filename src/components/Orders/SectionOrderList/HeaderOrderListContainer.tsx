import React from "react";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./SectionOrderList.css";

//icons
import AddIcon from "@mui/icons-material/Add";

const HeaderOrderListContainer: React.FC<{
  setshowAllSubOrdersList: React.Dispatch<React.SetStateAction<boolean>>;
  showAllSubOrdersList: boolean;
}> = ({ setshowAllSubOrdersList, showAllSubOrdersList }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControlLabel control={<Checkbox value={showAllSubOrdersList} onChange={() => setshowAllSubOrdersList((prev) => !prev)} />} label="Show all sub-orders" />
        <Button>
          <AddIcon sx={{ pr: 0.5 }} />
          Create Order
        </Button>
      </div>
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
    </>
  );
};

export default HeaderOrderListContainer;
