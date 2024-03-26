//display the form for the order informations and selection setup

import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import { z } from "zod";
import { ZodTypeAny } from "zod";

import { FormHelperText } from "@mui/material";

import { UseFormRegister, FieldErrors, Control } from "react-hook-form";

import { Typography, TextField } from "@mui/material";
import { Select, MenuItem, ListItemText, OutlinedInput, InputLabel, FormControl } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//style
import { styleDatepicker } from "../../../../style/datePicker";

//components
import FormListSetup from "./FormListSetup";

const schema = z.object({
  asset: z.string().min(1, "Asset is required"),
  type: z.string().min(1, "Type is required"),
  Creationdate: z.coerce.date({
    errorMap: ({ code }, { defaultError }) => {
      console.log("code", code);
      console.log("defaultError", defaultError);
      if (code == "invalid_date") return { message: "Creation date is required" };
      return { message: defaultError };
    },
  }),
  qty$: z
    .string()
    .min(1, "Qty $ is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "Zip code must contain only numeric characters",
    }),

  // .int("Qty $ must be a number")
  // .positive("Qty $ must be a positiv number"),
  // qty$: z.number({ required_error: "Qty$ is required" }).positive({ message: "Qty $ must be a positiv number" }),
  // qtyPercent: z.number().min(1, "Qty % must be greater than 0"),
  // SLPercentPF: z.number().min(1, "SL %PF must be greater than 0"),
  // qtyAsset: z.number().min(1, "Qty Asset must be greater than 0"),
  // buyingPrice: z.number().min(1, "Buying price must be greater than 0"),
  // SLprice: z.number().min(1, "SL price must be greater than 0"),
});

type FormValues = z.infer<typeof schema>;

const FormOrderInformations: React.FC<{
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  control: Control<FormValues>;
}> = ({ register, errors, control }) => {
  return (
    <div className="modal_creationOrder_form_container">
      <Typography variant="h5">Order informations :</Typography>
      <div className="modal_creationOrder_form_container_row">
        {/* <TextField name="asset" label="Asset" sx={{ width: "33%" }} /> */}
        <TextField label="Asset" sx={{ width: "33%" }} error={!!errors.asset} helperText={errors.asset?.message ? String(errors.asset?.message) : undefined} {...register("asset")} />
        <FormControl sx={{ width: "33%" }} error={!!errors.type}>
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

        <Controller
          control={control}
          name="Creationdate"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              // <DateTimePicker
              //   label="Date"
              //   value={field.value}
              //   inputRef={field.ref}
              //   onChange={(date) => {
              //     field.onChange(date);
              //   }}
              // />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"Creation date"}
                  views={["day", "month", "year"]}
                  name="Creationdate"
                  defaultValue={undefined}
                  value={null}
                  onChange={(date) => {
                    onChange(date);
                  }}
                  sx={{
                    width: "33%",
                  }}
                  // value={0}
                  // onChange={(date: Dayjs | null) => {
                  //   setdisplayConditionSelecetd((prev) => {
                  //     return { ...prev, dateEnd: date };
                  //   });
                  // }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                      error: !!error,
                      helperText: error?.message,
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
                  // slotProps={styleDatepicker}
                />
              </LocalizationProvider>
            );
          }}
        />
        {/* <DatePicker
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
          /> */}
      </div>
      <div className="modal_creationOrder_form_container_row">
        <TextField
          label="Qty $"
          sx={{ width: "33%" }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
              e.preventDefault();
            }
          }}
          error={!!errors.qty$}
          helperText={errors.qty$?.message ? String(errors.qty$?.message) : undefined}
          {...register("qty$")}
        />
        {/* <TextField
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
        /> */}
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
