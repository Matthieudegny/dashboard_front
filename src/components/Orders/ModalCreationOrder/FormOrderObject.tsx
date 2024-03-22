import React, { useState, useEffect } from "react";

import { Typography, TextField } from "@mui/material";
import { Select, MenuItem, ListItemText, OutlinedInput, InputLabel, FormControl } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//style
import { styleDatepicker } from "../../../style/datePicker";

//components
import FormListSetup from "./FormListSetup";

const FormOrderObject = () => {
  return (
    <div className="modal_creation_form_container">
      <Typography variant="h5">Order:</Typography>
      <div className="modal_creation_form_container_row">
        <TextField name="asset" label="Asset" sx={{ width: "33%" }} />
        <FormControl sx={{ width: "33%" }}>
          <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "white" }}>
            Type
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={"LONG"}
            // onChange={handleChange}
            input={<OutlinedInput label="Client" />}
            // renderValue={handleRenderValue}

            sx={{
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
              color: "white",
              height: "55px",
            }}
          >
            <MenuItem value={"LONG"}>
              <ListItemText primary={"LONG"} />
            </MenuItem>
            <MenuItem value={"SHORT"}>
              <ListItemText primary={"SHORT"} />
            </MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={"Creation date"}
            views={["day", "month", "year"]}
            name="Creationdate"
            sx={{
              width: "33%",
            }}
            // value={0}
            // onChange={(date: Dayjs | null) => {
            //   setdisplayConditionSelecetd((prev) => {
            //     return { ...prev, dateEnd: date };
            //   });
            // }}

            slotProps={styleDatepicker}
          />
        </LocalizationProvider>
      </div>
      <div className="modal_creation_form_container_row">
        <TextField
          name="qty$"
          label="Qty $"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          // onChange={(event) => {
          //   handleChangeWave(event);
          // }}
        />
        <TextField
          name="qty%"
          label="Qty %"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          // onChange={(event) => {
          //   handleChangeWave(event);
          // }}
        />
        <TextField
          name="SL%PF"
          label="Risque %"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          // onChange={(event) => {
          //   handleChangeWave(event);
          // }}
        />
      </div>
      <div className="modal_creation_form_container_row">
        <TextField
          name="qtyAsset"
          label="Qty Asset"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          // onChange={(event) => {
          //   handleChangeWave(event);
          // }}
        />
        <TextField
          name="buyingPrice"
          label="Buying price"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          // onChange={(event) => {
          //   handleChangeWave(event);
          // }}
        />
        <TextField
          name="SL price"
          label="SLprice"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          // onChange={(event) => {
          //   handleChangeWave(event);
          // }}
        />
      </div>
      <div className="modal_creation_form_container_row">
        <FormListSetup />
      </div>
    </div>
  );
};

export default FormOrderObject;
