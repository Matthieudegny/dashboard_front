import React, { useState } from "react";
import { Typography } from "@mui/material";

//composant
import FormImage from "./FormImage";

//model
import { ImageFrontType } from "../../../../model/Order/model_order";

const ContainerImage: React.FC<{
  listImageOrder: ImageFrontType[];
  setlistImageOrder: React.Dispatch<React.SetStateAction<ImageFrontType[]>>;
}> = ({ listImageOrder: listImageWithTitle, setlistImageOrder: setlistImageWithTitle }) => {
  return (
    <div className="modal_creation_form_container">
      <Typography variant="h5">Images related to order:</Typography>
      <FormImage setlistImageWithTitle={setlistImageWithTitle} listImageWithTitle={listImageWithTitle} />
    </div>
  );
};

export default ContainerImage;
