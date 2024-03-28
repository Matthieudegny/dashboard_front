import React from "react";

import { Typography, Button, CircularProgress, Box } from "@mui/material";
import ContainerTextEditor from "../../TextEditor/ContainerTextEditor";
import { Control, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

//model schema
import { CreationSetupFormValues, schemaSetupCreation } from "../../../model/Order/model_form_setup";
import LoadingButton from "@mui/lab/LoadingButton";

const FormCreationSetup: React.FC<{}> = () => {
  // handle form
  const methods = useForm<CreationSetupFormValues>({
    resolver: zodResolver(schemaSetupCreation),
    shouldFocusError: false,
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = methods;

  const onSubmit: SubmitHandler<CreationSetupFormValues> = (formValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal_section">
      <Controller
        control={control}
        name="title"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return <ContainerTextEditor contentState={value} setContentState={onChange} isEditable={true} size={"short"} title={"Title set up :"} showTitle={true} statutIsError={error} />;
        }}
      />

      <Controller
        control={control}
        name="description"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return <ContainerTextEditor contentState={value} setContentState={onChange} isEditable={true} size={"long"} title={"Description set up :"} showTitle={true} statutIsError={error} />;
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "2vh",
        }}
      >
        <LoadingButton sx={{ height: "35px" }} loading={false} loadingPosition="start" startIcon={false ? <CircularProgress style={{ marginRight: "-18px" }} /> : <Box></Box>} variant="contained" color="primary" type="submit">
          {false ? <span>Loading</span> : <>Creation setup</>}
        </LoadingButton>
      </div>
    </form>
  );
};

export default FormCreationSetup;
