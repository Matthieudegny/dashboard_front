import { Select, Typography, MenuItem, OutlinedInput, InputLabel, FormControl, Checkbox, FormHelperText, Button, CircularProgress, Box, FormControlLabel } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

//model
import { SetupGoType } from "../../../model/Categories/model_catgories";
import { SelectionSetupFormValues, schemaSetupSelection } from "../../../model/Order/model_form_setup";

//store
import { useCategoriesStore } from "../../../store/MainDatas/useCategoriesStore";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect } from "react";

const SelectListSetup = () => {
  const { listSetupGo } = useCategoriesStore();

  // handle form
  const methods = useForm<SelectionSetupFormValues>({
    resolver: zodResolver(schemaSetupSelection),
    shouldFocusError: false,
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
    control,
  } = methods;

  const onSubmit: SubmitHandler<SelectionSetupFormValues> = (formValues) => {
    console.log("qsdsqd", formValues);
  };

  useEffect(() => {
    console.log("test", getValues("selectedSetups")?.includes(4));
  }, [getValues]);

  const handleRenderValue = () => {
    if (getValues("selectedSetups")?.length === 0) return "";
    // i display the name of the firsts etup selected, and then the number of setup selected
    const firstSetupSelected = listSetupGo?.find((setupGo: SetupGoType) => setupGo.setup_go_id === getValues("selectedSetups")[0]);
    const lengthSetupSelected = getValues("selectedSetups")?.length;
    return `${firstSetupSelected?.setup_go_title} +${lengthSetupSelected}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal_section">
      <Typography variant="h6">Select Setups from your list :</Typography>

      <div className="modal_section_row">
        <Controller
          name="selectedSetups"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <FormControl sx={{ width: 300 }} error={!!errors.selectedSetups}>
              <InputLabel sx={{ color: "white", width: "160px" }} id="setupList">
                Set up
              </InputLabel>
              <Select
                {...field}
                labelId="setupList"
                label="Set up"
                multiple
                renderValue={handleRenderValue}
                defaultValue={[]}
                sx={{
                  ".MuiSvgIcon-root ": {
                    fill: "white !important",
                    backgroundColor: "var(--backgroundItemLight) !important",
                  },
                }}
              >
                {listSetupGo?.map((setupGo: SetupGoType) => (
                  <MenuItem key={setupGo.setup_go_id} value={setupGo.setup_go_id}>
                    <Checkbox checked={getValues("selectedSetups")?.includes(setupGo.setup_go_id)} />
                    {setupGo.setup_go_title}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.selectedSetups?.message}</FormHelperText>
            </FormControl>
          )}
        />
        {/* <Controller
          control={control}
          name="selectedSetups"
          defaultValue={[]}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <FormControl sx={{ width: 300 }} error={!!errors.selectedSetups}>
                <InputLabel id="demo-multiple-name-labelsdfsdfsd" sx={{ color: "white", width: "160px" }}>
                  Set up
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-labelsdfsdfsd"
                  label="Set up"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                  sx={{
                    ".MuiSvgIcon-root ": {
                      fill: "white !important",
                    },
                  }}
                >
                  {listSetupGo?.map((setupGo: SetupGoType) => (
                    <MenuItem key={setupGo.setup_go_id} value={setupGo.setup_go_id}>
                      <Checkbox checked={getValues("selectedSetups")?.includes(setupGo.setup_go_id)} />
                      {setupGo.setup_go_title}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.selectedSetups?.message}</FormHelperText>
              </FormControl>
            );
          }}
        /> */}
      </div>
      {/* <Select
            labelId="demo-multiple-name-labelsdfsdfsd"
            label="Set up"
            id="demo-multiple-name"
            multiple
            defaultValue={[]}
            {...register("selectedSetups")}
            input={<OutlinedInput label="Name" />}
            sx={{
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            {listSetupGo?.map((setupGo: SetupGoType) => (
              <MenuItem key={setupGo.setup_go_id} value={setupGo.setup_go_id}>
                <Checkbox checked={getValues("selectedSetups").includes(setupGo.setup_go_id)} />
                {setupGo.setup_go_title}
              </MenuItem>
            ))}
          </Select> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "2vh",
        }}
      >
        <Button onClick={() => ""} variant="outlined">
          No setup to associate
        </Button>
        <LoadingButton loading={false} loadingPosition="start" startIcon={false ? <CircularProgress style={{ marginRight: "-18px" }} /> : <Box></Box>} variant="contained" color="primary" type="submit">
          {false ? <span>Loading</span> : <>Associate setup</>}
        </LoadingButton>
      </div>
    </form>
  );
};

export default SelectListSetup;
