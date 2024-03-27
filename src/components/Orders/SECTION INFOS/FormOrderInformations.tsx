//display the form for the order informations and selection setup
import { FormHelperText } from "@mui/material";

import { UseFormRegister, FieldErrors, Control } from "react-hook-form";

import { Typography, TextField } from "@mui/material";
import { Select, MenuItem, ListItemText, OutlinedInput, InputLabel, FormControl } from "@mui/material";

//components
import FormListSetup from "./FormListSetup";
import DatePickerControlled from "../../DatePicker";

//model
import { CreationOrderFormValues } from "../../../model/Order/model_form_Order";

const FormOrderInformations: React.FC<{
  register: UseFormRegister<CreationOrderFormValues>;
  errors: FieldErrors<CreationOrderFormValues>;
  control: Control<CreationOrderFormValues>;
}> = ({ register, errors, control }) => {
  //only positiv number value for the input number
  const handleKeyDownonNumberInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key))) {
      e.preventDefault();
    }
  };

  const styleTextField = {
    width: "33%",
  };

  return (
    <div className="modal_section">
      <Typography variant="h5">Order informations :</Typography>
      <div className="modal_section_row">
        <TextField label="Asset" sx={styleTextField} error={!!errors.asset} helperText={errors.asset?.message ? String(errors.asset?.message) : undefined} {...register("asset")} />
        <FormControl sx={styleTextField} error={!!errors.type}>
          <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "white" }}>
            Type
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            defaultValue=""
            {...register("type")}
            input={<OutlinedInput label="Client" />}
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
          <FormHelperText>{errors.type?.message}</FormHelperText>
        </FormControl>

        <DatePickerControlled control={control} />
      </div>
      <div className="modal_section_row">
        <TextField label="Qty $" sx={styleTextField} onKeyDown={(e) => handleKeyDownonNumberInput(e)} error={!!errors.qty$} helperText={errors.qty$?.message ? String(errors.qty$?.message) : undefined} {...register("qty$")} />
        <TextField label="Qty %" sx={styleTextField} onKeyDown={(e) => handleKeyDownonNumberInput(e)} error={!!errors.qtyPercent} helperText={errors.qtyPercent?.message ? String(errors.qtyPercent?.message) : undefined} {...register("qtyPercent")} />

        <TextField
          label="SL % PF"
          sx={styleTextField}
          onKeyDown={(e) => handleKeyDownonNumberInput(e)}
          error={!!errors.sLPercentPF}
          helperText={errors.sLPercentPF?.message ? String(errors.sLPercentPF?.message) : undefined}
          {...register("sLPercentPF")}
        />
      </div>
      <div className="modal_section_row">
        <TextField label="Qty Asset" sx={styleTextField} onKeyDown={(e) => handleKeyDownonNumberInput(e)} error={!!errors.qtyAsset} helperText={errors.qtyAsset?.message ? String(errors.qtyAsset?.message) : undefined} {...register("qtyAsset")} />

        <TextField
          label="Buying price"
          sx={styleTextField}
          onKeyDown={(e) => handleKeyDownonNumberInput(e)}
          error={!!errors.buyingPrice}
          helperText={errors.buyingPrice?.message ? String(errors.buyingPrice?.message) : undefined}
          {...register("buyingPrice")}
        />

        <TextField label="SL price" sx={styleTextField} onKeyDown={(e) => handleKeyDownonNumberInput(e)} error={!!errors.sLprice} helperText={errors.sLprice?.message ? String(errors.sLprice?.message) : undefined} {...register("sLprice")} />
      </div>
    </div>
  );
};

export default FormOrderInformations;
