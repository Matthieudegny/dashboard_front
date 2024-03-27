import React from "react";

import { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

//component
import ContainerTextEditor from "../../TextEditor/ContainerTextEditor";

//model
import { CreationOrderFormValues } from "../../../model/Order/model_form_Order";

const FormOrderDescription: React.FC<{
  control: Control<CreationOrderFormValues>;
}> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="description"
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return <ContainerTextEditor contentState={value} setContentState={onChange} isEditable={true} size={"long"} title={"Order description :"} showTitle={true} statutIsError={error} />;
      }}
    />
  );
};

export default FormOrderDescription;
