//form related to the download of an image and the creation of an object ImageFrontType
//= title + description + image
//feature Insert and Creation object ImageFrontType
import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import "../ModalCreationOrder.css";

//icons
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckIcon from "@mui/icons-material/Check";
import ImageIcon from "@mui/icons-material/Image";

//composant
import ContainerTextEditor from "../../../TextEditor/ContainerTextEditor";

//model
import { ImageFrontType } from "../../../../model/Order/model_order";

//hook
import { useCreateImage } from "../../../../hook/Order/useCreateImage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FormCreationImageOrder: React.FC<{
  listImageOrder: ImageFrontType[];
  setlistImageOrder: React.Dispatch<React.SetStateAction<ImageFrontType[]>>;
}> = ({ listImageOrder: listImageWithTitle, setlistImageOrder: setlistImageWithTitle }) => {
  //hook to upload and create an object ImageFrontType + handle error form
  const { imageCreating, handleUploadImage, handleCreateImage, contentTitleImage, setcontentTitleImage, contentDescriptionImage, setcontentDescriptionImage, statutError } = useCreateImage(listImageWithTitle, setlistImageWithTitle);

  return (
    <div className="modal_creationOrder_form_container">
      <Typography variant="h5">Order image association :</Typography>

      <ContainerTextEditor contentState={contentTitleImage} setContentState={setcontentTitleImage} isEditable={true} size={"short"} title={"Title image"} showTitle={true} statutIsError={statutError.titleEmpty} />

      <ContainerTextEditor contentState={contentDescriptionImage} setContentState={setcontentDescriptionImage} isEditable={true} size={"long"} title={"Description image"} showTitle={true} statutIsError={statutError.descriptionEmpty} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            height: "35px",
            borderColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined,
            "&:hover": {
              borderColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined,
              backgroundColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined,
            },
            color: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined,
          }}
          component="label"
          startIcon={imageCreating.image ? <CheckIcon /> : <CloudUploadIcon />}
        >
          {imageCreating.image ? <ImageIcon /> : "Upload image"}
          <VisuallyHiddenInput type="file" onChange={(e) => handleUploadImage(e)} />
        </Button>
        <Button
          sx={{
            height: "35px",
          }}
          variant="outlined"
          onClick={handleCreateImage}
        >
          Create image
        </Button>
      </div>
    </div>
  );
};

export default FormCreationImageOrder;
