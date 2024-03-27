import React from "react";
import { Controller } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Control } from "react-hook-form";
import { CreationOrderFormValues } from "../model/Order/model_form_Order";

const DatePickerControlled: React.FC<{
  control: Control<CreationOrderFormValues>;
}> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="creationdate"
      rules={{ required: true }}
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"Creation date"}
              views={["day", "month", "year"]}
              name="creationdate"
              defaultValue={undefined}
              value={null}
              onChange={(date) => {
                onChange(date);
              }}
              sx={{
                width: "33%",
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  variant: "outlined",
                  error: !!error,
                  helperText: error ? error.message : undefined,
                },
                layout: {
                  sx: {
                    ul: {
                      "::-webkit-scrollbar": {
                        width: "2px",
                      },
                    },
                  },
                },
                desktopPaper: {
                  sx: {
                    "& .css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                      color: "white",
                    },
                    "& .css-zsvd46-MuiButtonBase-root-MuiPickersDay-root": {
                      backgroundColor: "#0e2530",
                      color: "white",
                    },
                    "& .css-wkkkxg-MuiButtonBase-root-MuiPickersDay-root": {
                      backgroundColor: "#0e2530",
                      color: "#15c5e0",
                    },
                    ".MuiPickersLayout-contentWrapper": {
                      color: "white",
                      backgroundColor: "#0e171c",
                    },
                    ".MuiPickersCalendarHeader-switchHeader": {
                      color: "white",
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
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default DatePickerControlled;
