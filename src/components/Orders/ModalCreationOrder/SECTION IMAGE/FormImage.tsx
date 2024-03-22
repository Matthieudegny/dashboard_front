//form related to the download of an image and the creation of an object ImageFrontType
//= title + description + image
//feature Insert and Creation object ImageFrontType
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import "@blocknote/core/fonts/inter.css";
// import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { Block } from "@blocknote/core";
import {
  BasicTextStyleButton,
  BlockNoteView,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FormattingToolbar,
  FormattingToolbarController,
  ImageCaptionButton,
  NestBlockButton,
  ReplaceImageButton,
  TextAlignButton,
  UnnestBlockButton,
  useCreateBlockNote,
} from "@blocknote/react";

import "../ModalCreationOrder.css";

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
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  const [statutError, setstatutError] = useState({
    titleEmpty: false,
    descriptionEmpty: false,
    imageEmpty: false,
  });
  //hook to upload and create an object ImageFrontType + handle error form
  const { imageCreating, setimageCreating, handleUploadImage, handleCreateImage } = useCreateImage(listImageWithTitle, setlistImageWithTitle, setstatutError, statutError);

  const [blocks, setBlocks] = useState<Block[]>([]);

  return (
    <>
      <div className="modal_creation_form_container_row">
        <div className="wrapper">
          <div className="item">
            <BlockNoteView
              sideMenu={false}
              editor={editor}
              formattingToolbar={false}
              onChange={() => {
                // Saves the document JSON to state.
                setBlocks(editor.document);
              }}
              imageToolbar={false}
              data-theming-css-variables-demo
            >
              <FormattingToolbarController
                formattingToolbar={() => (
                  <FormattingToolbar>
                    <BlockTypeSelect key={"blockTypeSelect"} />

                    {/* Extra button to toggle blue text & background */}
                    {/* <BlueButton key={"customButton"} /> */}

                    <ImageCaptionButton key={"imageCaptionButton"} />
                    <ReplaceImageButton key={"replaceImageButton"} />

                    <BasicTextStyleButton basicTextStyle={"bold"} key={"boldStyleButton"} />
                    <BasicTextStyleButton basicTextStyle={"italic"} key={"italicStyleButton"} />
                    <BasicTextStyleButton basicTextStyle={"underline"} key={"underlineStyleButton"} />
                    <BasicTextStyleButton basicTextStyle={"strike"} key={"strikeStyleButton"} />

                    <ColorStyleButton key={"colorStyleButton"} />
                  </FormattingToolbar>
                )}
              />
            </BlockNoteView>
          </div>
        </div>
        {/* <TextField
          fullWidth
          name="titleImage"
          value={imageCreating.title}
          label="Title Image"
          type="text"
          onChange={(event) => {
            if (event.target.value !== "" && statutError.titleEmpty) setstatutError((prev) => ({ ...prev, titleEmpty: false }));
            setimageCreating((prev) => ({ ...prev, title: event.target.value }));
          }}
          sx={textfieldWithErrorMode(statutError.titleEmpty)}
        /> */}
      </div>
      <div className="modal_creation_form_container_row">
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
      </div>
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
            height: "55px",
            borderColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change border color if there is an statutError.imageEmpty
            "&:hover": {
              borderColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change border color on hover if there is an error
              backgroundColor: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change background color on hover if there is an error
            },
            color: statutError.imageEmpty ? "var(--colorItemSecondary)" : undefined, // Change text color if there is an error
          }}
          component="label"
          role={undefined}
          startIcon={imageCreating.image ? <CheckIcon /> : <CloudUploadIcon />}
        >
          {imageCreating.image ? <ImageIcon /> : "Upload image"}
          <VisuallyHiddenInput type="file" onChange={(e) => handleUploadImage(e)} />
        </Button>
        <Button variant="outlined" onClick={handleCreateImage}>
          Create image
        </Button>
      </div>
    </>
  );
};

export default FormImage;
