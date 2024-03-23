import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
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

import "./EditorText.css";

//component
import ToolbarEditorText from "./ToolBar";

//model
import { TextEditorType } from "../../model/Order/model_order";

const ContainerTextEditor: React.FC<TextEditorType> = ({ contentState, setContentState, isEditable, size, title, showTitle }) => {
  //   const content = "<p>Hello World!</p>";
  const [contentEditor, setcontentEditor] = useState("");

  const extensions = [StarterKit];
  const editor: any = useEditor({
    extensions,
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
        gap: "0.5vw",
        width: "100%",
      }}
    >
      {showTitle ? (
        <Typography variant="h6" component="label">
          {title}:
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
