//compoenent with protal set to page Orders
//display a modal for the creation of an order

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Typography, TextField, Button } from "@mui/material";

import "./ModalCreationOrder.css";
import AddIcon from "@mui/icons-material/Add";

//composant
import FormOrderObject from "./FormOrderObject";
import ContainerImage from "./SECTION IMAGE/ContainerImage";
import FormOrderDescription from "./FormOrderDescription";
import ListImagesToDisplay from "./SECTION IMAGE/ListImagesToDisplay";

//model
import { ImageFrontType } from "../../../model/Order/model_order";

const ModalCreationOrderContainer: React.FC<{
  showModalCreationOrder: boolean;
  setshowModalCreationOrder: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModalCreationOrder, setshowModalCreationOrder }) => {
  const modalRoot = document.getElementById("modal-creationOrder");

  const [listImageOrder, setlistImageOrder] = useState<ImageFrontType[]>([]);

  return createPortal(
    <Modal
      open={showModalCreationOrder}
      onClose={() => setshowModalCreationOrder(false)}
      aria-labelledby="dialog-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "8vh auto",
        mb: "8vh",
      }}
      className={`${showModalCreationOrder ? "fromOpacity0to1" : ""}`}
    >
      <div className="modal_container">
        <header>
          <Typography sx={{ paddingBottom: "2vh" }} variant="h3">
            Order creation
          </Typography>
        </header>

        <div className="container_form">
          <div className="section_top">
            <div className="section_top_half">
              <FormOrderObject />
            </div>
            <div className="section_top_half">
              <ContainerImage listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />
            </div>
          </div>
          <div className="section_middle">
            <ListImagesToDisplay listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />
          </div>
          <div className="section_bottom">
            {/* Form description order */}
            <div className="modal_creation_form_container">
              <FormOrderDescription />
              {/* <TextField id="outlined-multiline-flexible" label="Description order" multiline minRows={4} /> */}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "2vh",
              }}
            >
              <Button variant="outlined">Cancel</Button>
              <Button startIcon={<AddIcon />} variant="contained">
                Creation order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>,
    modalRoot ? modalRoot : document.createElement("div")
  );
};

export default ModalCreationOrderContainer;
