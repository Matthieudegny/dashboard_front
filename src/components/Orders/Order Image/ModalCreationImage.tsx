import React, { useState } from "react";
import { ImageFrontType } from "../../../model/Order/model_order";

//component
import FormCreationImageOrder from "./FormCreationImageOrder";
import ListImagesToDisplay from "./ListImagesToDisplay";

const ModalCreationImage = () => {
  const [listImageOrder, setlistImageOrder] = useState<ImageFrontType[]>([]);

  return (
    <div>
      <FormCreationImageOrder listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />
      <ListImagesToDisplay listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />
    </div>
  );
};

export default ModalCreationImage;
