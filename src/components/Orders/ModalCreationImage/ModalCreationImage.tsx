import React, { useState } from "react";
import { ImageFrontType } from "../../../model/Order/model_order";

//component
import FormCreationImageOrder from "../SECTION IMAGE/FormCreationImageOrder";
import ListImagesToDisplay from "../SECTION IMAGE/ListImagesToDisplay";

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
