import React, { useRef } from "react";
import { Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//model
import { ImageFrontType } from "../../../../model/Order/model_order";

const ImageToDisplay: React.FC<{
  listImageOrder: ImageFrontType[];
  setlistImageOrder: React.Dispatch<React.SetStateAction<ImageFrontType[]>>;
  index: number;
  imageOrder: ImageFrontType;
}> = ({ listImageOrder, setlistImageOrder, imageOrder, index }) => {
  const myDivRef = useRef<HTMLDivElement>(null);

  const handleDeleteImageRow = (index: number) => {
    if (myDivRef.current) {
      myDivRef.current.classList.add("fromHeight100to0");
    }
    const newList = listImageOrder.filter((item, i) => i !== index);
    if (newList) {
      setTimeout(() => {
        setlistImageOrder(newList);
      }, 500);
    }
  };

  return (
    <div
      ref={myDivRef}
      className="rowContainerImageToDisplay fromOpacity0to1"
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
        width: "80%",
        borderRadius: "8px",
        overflow: "hidden",
        height: "300px",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={imageOrder.image} alt="image" style={{ width: "80%", height: "250px", margin: "auto" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2vh",
          padding: "10px",
          width: "45%",
          paddingLeft: "5%",
        }}
      >
        <Typography variant="h6">{imageOrder.title}</Typography>
        <Typography variant="h6">{imageOrder.description}</Typography>
      </div>

      <IconButton
        className="show_button"
        sx={{
          position: "absolute",
          right: "10px",
          top: "10px",
          display: "none",
        }}
        onClick={() => handleDeleteImageRow(index)}
      >
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
};

export default ImageToDisplay;
