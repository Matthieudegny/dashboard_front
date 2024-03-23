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
  //   const content = "<p>Hello World!</p>";
  const [contentEditor, setcontentEditor] = useState("");

  const extensions = [StarterKit];
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
        class: `editor ${isEditable ? (size === "short" ? "short" : "long") : ""} ${isEditable ? "editable" : "read-only"}`,
      },
    },
  });

  useEffect(() => {
    //if contentState is === "", i clear the editor
    if (contentState === "" && contentEditor !== "") {
      editor.commands.setContent("");
    }
  }, [contentState]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.2vw",
        width: "100%",
      }}
    >
      {showTitle ? (
        <Typography variant="h5" component="label" color={statutIsError ? "error" : ""}>
          {title}: {statutIsError ? <span style={{ fontStyle: "italic", fontSize: "1rem" }}>Please fill out this field</span> : ""}
        </Typography>
      ) : null}

      {isEditable ? (
        <div>
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
