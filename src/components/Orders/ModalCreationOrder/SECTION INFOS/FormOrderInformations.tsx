//display the form for the order informations and selection setup

import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { ZodTypeAny } from "zod";

import { Typography, TextField } from "@mui/material";
import { Select, MenuItem, ListItemText, OutlinedInput, InputLabel, FormControl } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//style
import { styleDatepicker } from "../../../../style/datePicker";

//components
import FormListSetup from "./FormListSetup";

const schema: ZodTypeAny = z.object({
  asset: z.string().min(1, "Asset is required"),
  type: z.string().min(1, "Type is required"),
  Creationdate: z.date().refine((date) => date != null, "Creation date is required"),
  qty$: z.number().min(1, "Qty $ must be greater than 0"),
  qtyPercent: z.number().min(1, "Qty % must be greater than 0"),
  SLPercentPF: z.number().min(1, "SL %PF must be greater than 0"),
  qtyAsset: z.number().min(1, "Qty Asset must be greater than 0"),
  buyingPrice: z.number().min(1, "Buying price must be greater than 0"),
  SLprice: z.number().min(1, "SL price must be greater than 0"),
});

type FormValues = z.infer<typeof schema>;

const FormOrderInformations = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="modal_creationOrder_form_container">
      <Typography variant="h5">Order informations :</Typography>
      <div className="modal_creationOrder_form_container_row">
        {/* <TextField name="asset" label="Asset" sx={{ width: "33%" }} /> */}
        <TextField label="Asset" sx={{ width: "33%" }} error={!!errors.asset} helperText={errors.asset?.message ? String(errors.asset?.message) : undefined} {...register("asset", { required: "Asset is required" })} />
        <FormControl sx={{ width: "33%" }}>
          <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "white" }}>
            Type
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            defaultValue=""
            // {...register("type")}
            // value={"LONG"}
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
      <div className="modal_creationOrder_form_container_row">
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
      <div className="modal_creationOrder_form_container_row">
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
      <Typography sx={{ pt: "1vh" }} variant="h5">
        Setup chosen :
      </Typography>
      <div className="modal_creationOrder_form_container_row">
        <FormListSetup />
      </div>
    </div>
  );
};

export default FormOrderInformations;
