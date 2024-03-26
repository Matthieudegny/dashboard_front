export const styleDatepicker = {
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
  textField: {
    variant: "outlined",
    error: true,
    helperText: "lllllllll",
  },
};
