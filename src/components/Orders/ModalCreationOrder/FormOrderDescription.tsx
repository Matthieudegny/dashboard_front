import React, { useState } from "react";

//component
import ContainerTextEditor from "../../TextEditor/ContainerTextEditor";

const FormOrderDescription = () => {
  const [descriptionOrderState, setdescriptionOrderState] = useState("");

  return (
    <div>
      <ContainerTextEditor contentState={descriptionOrderState} setContentState={setdescriptionOrderState} isEditable={true} size={"long"} title={"Description order"} showTitle={true} statutIsError={false} />
    </div>
  );
};

export default FormOrderDescription;
