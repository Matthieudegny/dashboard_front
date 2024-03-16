import React from "react";

import "../../../pages/Orders/Orders.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

export const ColumnWithShowOptions: React.FC<{
  returnListOptionUsed: () => JSX.Element[] | undefined;
  title: string;
  subtitle: string;
}> = ({ returnListOptionUsed, title, subtitle }) => {
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
          <DoNotDisturbAltIcon sx={{ fontSize: "20px", color: "#0eb0fb" }} />
        )}
      </div>
    </div>
  );
};

export default ColumnWithShowOptions;
