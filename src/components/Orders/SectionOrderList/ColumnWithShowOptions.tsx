import React from "react";

import "../../../pages/Orders/Orders.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

export const ColumnWithShowOptions: React.FC<{
  returnListOptionUsed: () => JSX.Element[] | undefined;
  title: string;
}> = ({ returnListOptionUsed, title }) => {
  return (
    <div className="OI_colum">
      <div
        style={{
          cursor: `${returnListOptionUsed()?.length ?? false ? "pointer" : "default"}`,
        }}
        className="iterationListSetup_Select"
      >
        {returnListOptionUsed()?.length ?? false ? (
          <div className="iterationListSetup_Select_title">
            <span>{title}</span>
            <ExpandMoreIcon />
            <div className="iterationListSetup_Options_Container">{returnListOptionUsed()}</div>
          </div>
        ) : (
          <DoNotDisturbAltIcon sx={{ fontSize: "20px", color: "#15c5e0" }} />
        )}
      </div>
    </div>
  );
};

export default ColumnWithShowOptions;
