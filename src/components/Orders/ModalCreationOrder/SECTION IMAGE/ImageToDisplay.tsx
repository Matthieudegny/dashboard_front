import React, { useRef } from "react";
import { Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "../ModalCreationOrder.css";

//model
import { ImageFrontType } from "../../../../model/Order/model_order";

//component
import ContainerTextEditor from "../../../TextEditor/ContainerTextEditor";

const ImageToDisplay: React.FC<{
  listImageOrder: ImageFrontType[];
  setlistImageOrder: React.Dispatch<React.SetStateAction<ImageFrontType[]>>;
  index: number;
  imageOrder: ImageFrontType;
}> = ({ listImageOrder, setlistImageOrder, imageOrder, index }) => {
  const myDivRef = useRef<HTMLDivElement>(null);

  const handleDeleteImageRow = (index: number) => {
    if (myDivRef.current) {
      myDivRef.current.classList.remove("fromOpacity0to1");
      myDivRef.current.classList.add("fromHeight100to0");
    }
    const newList = listImageOrder.filter((item, i) => i !== index);
    if (newList) {
      setTimeout(() => {
        setlistImageOrder(newList);
      }, 500);
    }
  };

  const handleUpdateTitle = (newValue: string) => {
    let listImagesCloned = structuredClone(listImageOrder);
    listImagesCloned[index].title = newValue;
    setlistImageOrder(listImagesCloned);
  };

  const handleUpdateDescription = (newValue: string) => {
    let listImagesCloned = structuredClone(listImageOrder);
    listImagesCloned[index].description = newValue;
    setlistImageOrder(listImagesCloned);
  };

  return (
    <div ref={myDivRef} className="rowContainerImageToDisplay fromOpacity0to1">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            margin: "2vh",
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
          <ContainerTextEditor contentState={imageOrder.title} setContentState={handleUpdateTitle} isEditable={false} size={"short"} title={""} showTitle={false} />
          <ContainerTextEditor contentState={imageOrder.description} setContentState={handleUpdateDescription} isEditable={false} size={"short"} title={""} showTitle={false} />
          {/* <Typography variant="h6">{imageOrder.title}</Typography>
        <Typography variant="h6">{imageOrder.description}</Typography> */}
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
    </div>
  );
};

export default ImageToDisplay;
