import React from "react";
import { createPortal } from "react-dom";
import { Modal, Typography, TextField } from "@mui/material";

import "./ModalCreationOrder.css";

const ModalCreationOrder: React.FC<{
  showModalCreationOrder: boolean;
  setshowModalCreationOrder: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModalCreationOrder, setshowModalCreationOrder }) => {
  const modalRoot = document.getElementById("modal-creationOrder");

  if (!modalRoot) return null;

  return createPortal(
    <Modal
      open={showModalCreationOrder}
      onClose={() => setshowModalCreationOrder(false)}
      aria-labelledby="dialog-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0e2530",
        margin: "8vh 2vh 2vh 2vh",
        height: "calc(100% -10vh)",
        width: "calc(100% - 4vh)",
        borderRadius: "8px",
      }}
      className={`${showModalCreationOrder ? "fromOpacity0to1" : ""}`}
    >
      <div className="modal_container">
        <header>
          <Typography variant="h3">Order creation:</Typography>
        </header>
        <div>
          {/* section form */}
          <div>
            <TextField
              name="odpNumber"
              label="Nombre d'ODP"
              type="number"
              value={0}
              required
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+" || (isNaN(Number(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key))) {
                  e.preventDefault();
                }
              }}
              //   onChange={(event) => {
              //     handleChangeWave(event);
              //   }}
              sx={{ width: "49%" }}
            />
          </div>
        </div>
      </div>
    </Modal>,
    modalRoot
  );
};

export default ModalCreationOrder;
