//form related to the download of an image and the creation of an object ImageFrontType
//= title + description + image
//feature Insert and Creation object ImageFrontType
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import "../ModalCreationOrder.css";

//component
import ContainerTextEditor from "../../../TextEditor/ContainerTextEditor";

//style
import { textfieldWithErrorMode } from "../../../../style/TextfieldWithErrorMode";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckIcon from "@mui/icons-material/Check";
import ImageIcon from "@mui/icons-material/Image";

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

//model
import { ImageFrontType } from "../../../../model/Order/model_order";

//hook
import { useCreateImage } from "../../../../hook/Order/useCreateImage";

const FormImage: React.FC<{
  setlistImageWithTitle: React.Dispatch<React.SetStateAction<ImageFrontType[]>>;
  listImageWithTitle: ImageFrontType[];
}> = ({ setlistImageWithTitle, listImageWithTitle }) => {
  const [statutError, setstatutError] = useState({
    titleEmpty: false,
    descriptionEmpty: false,
    imageEmpty: false,
  });

  //hook to upload and create an object ImageFrontType + handle error form
  const { imageCreating, setimageCreating, handleUploadImage, handleCreateImage, contentTitleImage, setcontentTitleImage, contentDescriptionImage, setcontentDescriptionImage } = useCreateImage(
    listImageWithTitle,
    setlistImageWithTitle,
    setstatutError,
    statutError
  );

  return (
    <>
      <ContainerTextEditor contentState={contentTitleImage} setContentState={setcontentTitleImage} isEditable={true} size={"short"} title={"Title image"} showTitle={true} statutIsError={statutError.titleEmpty} />

      <ContainerTextEditor contentState={contentDescriptionImage} setContentState={setcontentDescriptionImage} isEditable={true} size={"long"} title={"Description image"} showTitle={true} statutIsError={statutError.descriptionEmpty} />

      {/* <div className="modal_creation_form_container_row">
        <TextField
          value={imageCreating.description}
          name="descriptionImage"
          label="Description Image"
          sx={textfieldWithErrorMode(statutError.descriptionEmpty)}
          multiline
          rows={5}
          type="text"
          onChange={(event) => {
            if (event.target.value !== "" && statutError.descriptionEmpty) setstatutError((prev) => ({ ...prev, descriptionEmpty: false }));
            setimageCreating((prev) => ({ ...prev, description: event.target.value }));
          }}
        />
      </div> */}
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
            borderColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change border color if there is an statutError.imageEmpty
            "&:hover": {
              borderColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change border color on hover if there is an error
              backgroundColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change background color on hover if there is an error
            },
            color: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change text color if there is an error
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
    </>
  );
};

export default FormImage;
