import React from "react";

import { Modal, Typography } from "@mui/material";

//composant
import FormCreationSetup from "./FormCreationSetup";
import SelectListSetup from "./SelectListSetup";

const ModalCreationSetup: React.FC<{
  showModalSetup: boolean;
  setshowModalSetup: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModalSetup, setshowModalSetup }) => {
  return (
    <Modal
      open={showModalSetup}
      onClose={() => setshowModalSetup(false)}
      aria-labelledby="dialog-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "8vh auto",
        mb: "8vh",
      }}
      className={`${showModalSetup ? "fromOpacity0to1" : ""}`}
    >
      <div className="modal_container">
        <header style={{ paddingBottom: "3vh" }}>
          <Typography variant="h3">Associate Setup with your trade</Typography>
          <Typography style={{ color: "var(--textColordarker)" }} variant="h5">
            Create a setup if necessary, or select directly from the List
          </Typography>
        </header>
        <FormCreationSetup />
        <SelectListSetup />
      </div>
    </Modal>
  );
};

export default ModalCreationSetup;
