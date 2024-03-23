import { type Editor } from "@tiptap/react";
import { Toolbar, Button, Box } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import Typography from "@mui/material/Typography";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

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

  //   const toggleHeading = (level: number) => {
  //     if (isActive("heading", { level })) {
  //       editor.chain().focus().setParagraph().run();
  //     } else {
  //       editor.chain().focus().toggleHeading({ level }).run();
  //     }
  //   };

  const styleIsActive = (effect: string) => {
    return {
      color: isActive(effect) ? "white" : "white",
      //   backgroundColor: isActive(effect) ? "#15c5e0" : "",
    };
  };

  const styleIsActiveTitle = (level: number) => {
    return {
      color: editor.isActive("heading", { level }) ? "white" : "white",
      backgroundColor: editor.isActive("heading", { level }) ? "#15c5e0" : "",
    };
  };

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
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
        {/* <IconButton onClick={() => editor.chain().focus().toggleStrikethrough().run()} className={isActive("strike") ? "is-active" : ""}>
          <StrikethroughSIcon />
        </IconButton> */}
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`iconToolBar ${editor.isActive("heading", { level: 1 }) ? "is-active" : ""}`}>
          <Box sx={{ fontSize: "14px", padding: "2px" }}>H1</Box>
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`iconToolBar ${editor.isActive("heading", { level: 2 }) ? "is-active" : ""}`}>
          <Box sx={{ fontSize: "14px", padding: "2px" }}>H2</Box>
        </IconButton>
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`iconToolBar ${editor.isActive("heading", { level: 3 }) ? "is-active" : ""}`}>
          <Box sx={{ fontSize: "14px", padding: "2px" }}>H3</Box>
        </IconButton>
        {/* <IconButton onClick={() => toggleHeading(2)} className={isActive("heading", { level: 2 }) && !isActive("paragraph") ? "is-active" : ""}>
          <LooksTwoIcon />
        </IconButton>
        <IconButton onClick={() => toggleHeading(3)} className={isActive("heading", { level: 3 }) && !isActive("paragraph") ? "is-active" : ""}>
          <Looks3Icon />
        </IconButton> */}
      </Toolbar>
      {/* <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>
        bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "is-active" : ""}>
        italic
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive("strike") ? "is-active" : ""}>
        strike
      </button>
      <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive("code") ? "is-active" : ""}>
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>
      <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive("paragraph") ? "is-active" : ""}>
        paragraph
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}>
        h1
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}>
        h2
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}>
        h3
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}>
        h4
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}>
        h5
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}>
        h6
      </button> */}
    </>
  );
};
export default ToolbarEditorText;
