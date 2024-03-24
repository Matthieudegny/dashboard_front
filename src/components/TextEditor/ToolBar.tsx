import { type Editor } from "@tiptap/react";
import { Toolbar, Button, Box } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import "./EditorText.css";

export const ToolbarEditorText: React.FC<{ editor: Editor }> = ({ editor }) => {
  if (!editor) return null;

  const isActive = (mark: string) => editor.isActive(mark);

  const toggleUnderline = () => {
    if (isActive("underline")) {
      editor.chain().focus().unsetMark("underline").run();
    } else {
      editor.chain().focus().toggleMark("underline").run();
    }
  };

  return (
    <>
      <Toolbar
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          gap: "0.7vw",
          borderRadius: "5px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton onClick={() => editor.chain().focus().toggleBold().run()} className={`iconToolBar ${editor.isActive("bold") ? "is-active" : ""}`}>
          <FormatBoldIcon sx={{ fontSize: "20px" }} />
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleItalic().run()} className={`iconToolBar ${editor.isActive("italic") ? "is-active" : ""}`}>
          <FormatItalicIcon sx={{ fontSize: "20px" }} />
        </IconButton>
        <IconButton onClick={toggleUnderline} className={`iconToolBar ${editor.isActive("underline") ? "is-active" : ""}`}>
          <FormatUnderlinedIcon sx={{ fontSize: "20px" }} />
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`iconToolBar ${editor.isActive("heading", { level: 1 }) ? "is-active" : ""}`}>
          <Box sx={{ fontSize: "14px", padding: "2px" }}>H1</Box>
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`iconToolBar ${editor.isActive("heading", { level: 2 }) ? "is-active" : ""}`}>
          <Box sx={{ fontSize: "14px", padding: "2px" }}>H2</Box>
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`iconToolBar ${editor.isActive("heading", { level: 3 }) ? "is-active" : ""}`}>
          <Box sx={{ fontSize: "14px", padding: "2px" }}>H3</Box>
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "is-active" : ""}>
          <FormatListBulletedIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Toolbar>
    </>
  );
};
export default ToolbarEditorText;
