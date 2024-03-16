import React from "react";
import { Typography, Checkbox, Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./SideBar.css";

const SideBarContainer = () => {
  return (
    <div className="SideBarContainer">
      <Typography variant="h4" sx={{ padding: "0.5vw" }}>
        Sort your list by:
      </Typography>
      <div className="container_option">
        <Typography variant="h5">Date:</Typography>
        <FormControlLabel control={<Checkbox />} label="ASC" />
        <FormControlLabel control={<Checkbox />} label="DESC" />
      </div>
      <div className="container_option">
        <Typography variant="h5">Date:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ pt: 1.5 }}>
            <DatePicker
              label={"Start date"}
              views={["month", "year"]}
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
        <FormControlLabel control={<Checkbox />} label="LONG" />
        <FormControlLabel control={<Checkbox />} label="SHORT" />
      </div>
      <div className="container_option">
        <Typography variant="h5">Result $:</Typography>
        <FormControlLabel control={<Checkbox />} label="ASC" />
        <FormControlLabel control={<Checkbox />} label="DESC" />
      </div>
      <div className="container_option">
        <Typography variant="h5">Statut:</Typography>
        <FormControlLabel control={<Checkbox />} label="In progress" />
        <FormControlLabel control={<Checkbox />} label="Full closed" />
      </div>
    </div>
  );
};

export default SideBarContainer;
