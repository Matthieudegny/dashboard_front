import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Select, MenuItem, OutlinedInput, InputLabel, FormControl, Checkbox } from "@mui/material";
import { SetupGoType } from "../../../../model/Categories/model_catgories";

//store
import { useCategoriesStore } from "../../../../store/MainDatas/useCategoriesStore";

const FormListSetup = () => {
  const { listSetupGo } = useCategoriesStore();
  return (
    <FormControl sx={{ width: 300 }}>
      <InputLabel id="demo-multiple-name-labelsdfsdfsd" sx={{ color: "white", width: "160px" }}>
        Set up
      </InputLabel>
      <Select
        labelId="demo-multiple-name-labelsdfsdfsd"
        label="Set up"
        id="demo-multiple-name"
        multiple
        value={[]}
        // onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        // MenuProps={MenuProps}
        sx={{
          ".MuiSvgIcon-root ": {
            fill: "white !important",
          },
        }}
      >
        {listSetupGo?.map((setupGo: SetupGoType) => (
          <MenuItem key={setupGo.setup_go_id} value={setupGo.setup_go_title}>
            <Checkbox checked={true} />
            {setupGo.setup_go_title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormListSetup;
