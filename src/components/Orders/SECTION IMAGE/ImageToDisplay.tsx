//display one image of the list
//containing the image, the title and the description
//feature = delete the image

import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "../ModalCreationOrder.css";

//model
import { ImageFrontType } from "../../../model/Order/model_order";

//component
import ContainerTextEditor from "../../TextEditor/ContainerTextEditor";

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

  return (
    <div ref={myDivRef} className="imageToDisplay fromOpacity0to1">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2vh",
            width: "50%",
          }}
        >
          <img src={imageOrder.image} alt="image" style={{ width: "100%", height: "350px", margin: "auto" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            padding: "10px",
            width: "45%",
            paddingLeft: "5%",
          }}
        >
          <ContainerTextEditor contentState={imageOrder.title} setContentState={undefined} isEditable={false} size={"short"} title={""} showTitle={false} statutIsError={false} />
          <ContainerTextEditor contentState={imageOrder.description} setContentState={undefined} isEditable={false} size={"short"} title={""} showTitle={false} statutIsError={false} />
        </div>

        <IconButton
          className="show_button"
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
            display: "none",
            "&:hover": {
              backgroundColor: "var(--backgroundItemLight)",
            },
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
