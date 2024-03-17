import React from "react";
import { Typography, Checkbox, Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import dayjs, { Dayjs } from "dayjs";

import "./SectionSideBar.css";

//model
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

//hook
import { useSortedGlobalOrder } from "../../../hook/Order/useSortedGlobalOrder";

const SideBarContainer: React.FC<{
  listGlobalOrdersSorted: GlobalOrderFillWithDatasDto[];
  setlistGlobalOrdersSorted: React.Dispatch<React.SetStateAction<GlobalOrderFillWithDatasDto[]>>;
  listGlobalOrders: GlobalOrderFillWithDatasDto[];
  showSideBar: boolean;
}> = ({ listGlobalOrdersSorted, setlistGlobalOrdersSorted, listGlobalOrders, showSideBar }) => {
  //hook to handle the sort of the list of orders
  const { setSortConditionSelected, setdisplayConditionSelecetd, displayConditionSelecetd, sortConditionSelected, oldestOrderDate } = useSortedGlobalOrder(listGlobalOrdersSorted, setlistGlobalOrdersSorted, listGlobalOrders);

  const handleChangeSorting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortConditionSelected(event.target.value as "Date_ASC" | "Date_DESC" | "Result_ASC" | "Result_DESC");
  };

  const handleChangeDisplay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdisplayConditionSelecetd((prev) => {
      return { ...prev, [event.target.name]: event.target.checked };
    });
  };

  const today = dayjs();

  return (
    <div className={`SideBarContainer ${showSideBar ? "showSideBar" : ""}`}>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={sortConditionSelected} onChange={(e) => handleChangeSorting(e)}>
        <div className="SideBarContainer_section">
          {/* section sort */}
          <Typography variant="h4">Sort your list by :</Typography>
          <div className="container_option">
            <Typography variant="h5">Date:</Typography>
            <FormControlLabel value="Date_ASC" control={<Radio size="small" />} label={<Typography variant="h6">ASC</Typography>} />
            <FormControlLabel value="Date_DESC" control={<Radio size="small" />} label={<Typography variant="h6">DESC</Typography>} />
          </div>
          <div className="container_option">
            <Typography variant="h5">Result $:</Typography>
            <FormControlLabel value="Result_ASC" control={<Radio size="small" />} label={<Typography variant="h6">ASC</Typography>} />
            <FormControlLabel value="Result_DESC" control={<Radio size="small" />} label={<Typography variant="h6">DESC</Typography>} />
          </div>
        </div>
      </RadioGroup>

      <div className="SideBarContainer_section">
        {/* section Display */}
        <Typography variant="h4">Display your list by :</Typography>
        <div className="container_option">
          <Typography variant="h5">Date:</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ pt: 1 }}>
              <DatePicker
                label={"Start date"}
                views={["month", "year"]}
                name="dateStart"
                value={displayConditionSelecetd.dateStart}
                minDate={oldestOrderDate ?? undefined}
                maxDate={today.subtract(1, "month")}
                onChange={(date: Dayjs | null) => {
                  if (date) {
                    const newDate = date.set("date", 1);
                    setdisplayConditionSelecetd((prev) => {
                      return { ...prev, dateStart: newDate };
                    });
                  }
                }}
                slotProps={{
                  desktopPaper: {
                    sx: {
                      ".MuiPickersLayout-contentWrapper": {
                        color: "white",
                        backgroundColor: "#0e171c",
                      },
                      ".MuiPickersYear-yearButton.Mui-selected": {
                        color: "white",
                        backgroundColor: "#0eb0fb",
                      },
                      ".MuiPickersMonth-monthButton.Mui-selected": {
                        color: "white",
                        backgroundColor: "#0eb0fb",
                      },
                    },
                  },
                  textField: {
                    InputLabelProps: {
                      shrink: true,
                      sx: { mt: -0.5 },
                    },
                    size: "small",
                  },
                }}
              />
            </Box>
            <Box sx={{ pt: 2 }}>
              <DatePicker
                label={"End date"}
                views={["month", "year"]}
                name="dateEnd"
                value={displayConditionSelecetd.dateEnd}
                minDate={displayConditionSelecetd.dateStart ? displayConditionSelecetd.dateStart.add(1, "month") : undefined}
                maxDate={today}
                onChange={(date: Dayjs | null) => {
                  setdisplayConditionSelecetd((prev) => {
                    return { ...prev, dateEnd: date };
                  });
                }}
                slotProps={{
                  desktopPaper: {
                    sx: {
                      ".MuiPickersLayout-contentWrapper": {
                        color: "white",
                        backgroundColor: "#0e171c",
                      },
                      ".MuiPickersYear-yearButton.Mui-selected": {
                        color: "white",
                        backgroundColor: "#0eb0fb",
                      },
                      ".MuiPickersMonth-monthButton.Mui-selected": {
                        color: "white",
                        backgroundColor: "#0eb0fb",
                      },
                    },
                  },
                  textField: {
                    InputLabelProps: {
                      shrink: true,
                      sx: { mt: -0.5 },
                    },
                    size: "small",
                  },
                  day: {
                    sx: {
                      "& .MuiDateCalendar-root css-1q04gal-MuiDateCalendar-root": {
                        backgroundColor: "red",
                      },
                    },
                  },
                }}
              />
            </Box>
          </LocalizationProvider>
        </div>
        <div className="container_option">
          <Typography variant="h5">Type:</Typography>
          <FormControlLabel control={<Checkbox size="small" name="typeLong" onChange={(e) => handleChangeDisplay(e)} checked={displayConditionSelecetd.typeLong} />} label={<Typography variant="h6">LONG</Typography>} />
          <FormControlLabel control={<Checkbox size="small" name="typeShort" onChange={(e) => handleChangeDisplay(e)} checked={displayConditionSelecetd.typeShort} />} label={<Typography variant="h6">SHORT</Typography>} />
        </div>
        <div className="container_option">
          <Typography variant="h5">Statut:</Typography>
          <FormControlLabel control={<Checkbox size="small" name="statutInProgress" onChange={(e) => handleChangeDisplay(e)} checked={displayConditionSelecetd.statutInProgress} />} label={<Typography variant="h6">In progress</Typography>} />
          <FormControlLabel control={<Checkbox size="small" name="statutFullClosed" onChange={(e) => handleChangeDisplay(e)} checked={displayConditionSelecetd.statutFullClosed} />} label={<Typography variant="h6">Full closed</Typography>} />
        </div>
      </div>
    </div>
  );
};

export default SideBarContainer;
