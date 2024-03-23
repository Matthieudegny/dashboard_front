//form related to the download of an image and the creation of an object ImageFrontType
//= title + description + image
//feature Insert and Creation object ImageFrontType
import React, { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Editor } from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import Document from "@tiptap/extension-document";
import Focus from "@tiptap/extension-focus";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "../ModalCreationOrder.css";

//component
import ToolbarEditorText from "../../../TextEditor/ToolBar";

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
  // const editor = useCreateBlockNote();

  const [statutError, setstatutError] = useState({
    titleEmpty: false,
    descriptionEmpty: false,
    imageEmpty: false,
  });
  //hook to upload and create an object ImageFrontType + handle error form

  const { imageCreating, setimageCreating, handleUploadImage, handleCreateImage } = useCreateImage(listImageWithTitle, setlistImageWithTitle, setstatutError, statutError);

  const extensions = [StarterKit];

  const content = "<p>Hello World!</p>";

  const editor: any = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      Code,
      BulletList,
      ListItem,
    ],
    autofocus: true,
    content,
    onUpdate: ({ editor }) => {
      console.log("JSON", editor.getJSON());
      console.log("HTML", editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "editor",
      },
    },
  });

  return (
    <>
      <div>
        <ToolbarEditorText editor={editor} />

        <EditorContent editor={editor} />
      </div>
      <div className="modal_creation_form_container_row">
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
