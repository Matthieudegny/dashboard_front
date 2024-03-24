import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./EditorText.css";

//component
import ToolbarEditorText from "./ToolBar";

//model
import { TextEditorType } from "../../model/Order/model_order";

const ContainerTextEditor: React.FC<TextEditorType> = ({ contentState, setContentState, isEditable, size, title, showTitle, statutIsError }) => {
  const [contentEditor, setcontentEditor] = useState("");

  const editor: any = useEditor({
    extensions: [StarterKit, Underline],
    editable: isEditable,
    content: contentState,
    onUpdate: ({ editor }) => {
      setcontentEditor(editor.getHTML());
      setContentState(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: `editor ${isEditable ? (size === "short" ? "short" : "long") : ""} ${isEditable ? "editable" : ""} `,
      },
    },
  });

  useEffect(() => {
    //if contentState is === "" && some content is present, i clear the editor
    if (contentState === "" && contentEditor !== "") {
      editor.commands.setContent("");
    }
  }, [contentState]);

  const key = statutIsError ? "error" : "normal";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "-5px",
      }}
    >
      {showTitle ? (
        <Typography sx={{ pb: "0.5vh" }} variant="h6" component="label" color={statutIsError ? "error" : ""}>
          {title} {statutIsError ? <span style={{ fontStyle: "italic", fontSize: "1rem" }}>Please fill out this field</span> : ""}
        </Typography>
      ) : null}

      {isEditable ? (
        <div
          style={{
            display: "block-inline",
          }}
        >
          <ToolbarEditorText editor={editor} />
        </div>
      ) : null}
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ContainerTextEditor;
