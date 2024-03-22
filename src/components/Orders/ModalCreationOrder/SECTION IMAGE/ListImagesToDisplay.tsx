import React from "react";

//component
import ImageToDisplay from "./ImageToDisplay";

//model
import { ImageFrontType } from "../../../../model/Order/model_order";

const ListImagesToDisplay: React.FC<{
  listImageOrder: ImageFrontType[];
  setlistImageOrder: React.Dispatch<React.SetStateAction<ImageFrontType[]>>;
}> = ({ listImageOrder, setlistImageOrder }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {listImageOrder.length > 0
        ? listImageOrder?.map((imageOrder, index) => {
            return <ImageToDisplay key={imageOrder.id} index={index} imageOrder={imageOrder} listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />;
          })
        : null}
    </div>
  );
};

export default ListImagesToDisplay;
