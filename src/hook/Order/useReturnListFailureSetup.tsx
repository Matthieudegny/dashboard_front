//model
import { GlobalOrderFillWithDatasDto, SubOrderFillWithDatasDto } from "../../model/Order/model_order";
import { SetupGoType, FailureGoType, SetupSoType, FailureSoType } from "../../model/Categories/model_catgories";

//icons
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const useReturnListFailureSetup = (
  order: GlobalOrderFillWithDatasDto | SubOrderFillWithDatasDto
): {
  returnSetupsListUsed: () => JSX.Element[] | undefined;
  returnFailureListUsed: () => JSX.Element[] | undefined;
} => {
  const returnSetupsListUsed = () => {
    if ("globalOrder" in order) {
      return order?.setupGo.map((setup: SetupGoType) => {
        return (
          <div className="iterationListSetup_Options_item" key={setup.setup_go_id}>
            <CheckBoxIcon sx={{ fontSize: "18px", color: "#0eb0fb", paddingRight: "5px" }} />
            {setup.setup_go_title}
          </div>
        );
      });
    }
    if ("subOrder" in order) {
      return order?.setupSo.map((setup: SetupSoType) => {
        return (
          <div className="iterationListSetup_Options_item" key={setup.setup_so_id}>
            <CheckBoxIcon sx={{ fontSize: "18px", color: "#0eb0fb", paddingRight: "5px" }} />
            {setup.setup_so_title}
          </div>
        );
      });
    }
  };

  const returnFailureListUsed = () => {
    if ("globalOrder" in order) {
      return order?.failureGo.map((failure: FailureGoType) => {
        return (
          <div className="iterationListSetup_Options_item" key={failure.failure_go_id}>
            <CheckBoxIcon sx={{ fontSize: "18px", color: "#0eb0fb", paddingRight: "5px" }} />
            {failure.failure_go_title}
          </div>
        );
      });
    }
    if ("subOrder" in order) {
      return order?.failureSo.map((failure: FailureSoType) => {
        return (
          <div className="iterationListSetup_Options_item" key={failure.failure_so_id}>
            <CheckBoxIcon sx={{ fontSize: "18px", color: "#0eb0fb", paddingRight: "5px" }} />
            {failure.failure_so_title}
          </div>
        );
      });
    }
  };

  return { returnSetupsListUsed, returnFailureListUsed };
};
