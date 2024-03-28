//compoenent with protal set to page Orders
//display a modal for the creation of an order

import React, { useState } from "react";
import { createPortal } from "react-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Modal, Typography, Button, CircularProgress, Box } from "@mui/material";

import "./ModalCreationOrder.css";
import AddIcon from "@mui/icons-material/Add";

//composant
import FormCreationOrder from "./FormCreationOrder";

//model
import { CreationOrderFormValues, schemaOrderCreation } from "../../../model/Order/model_form_Order";
import { GlobalOrderFillWithDatasDto } from "../../../model/Order/model_order";

//hook
import { useCreationOrder } from "../../../hook/Order/useCreationOrder";
import LoadingButton from "@mui/lab/LoadingButton";

const ModalCreationOrderContainer: React.FC<{
  showModalCreationOrder: boolean;
  setshowModalCreationOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setshowModalSetup: React.Dispatch<React.SetStateAction<boolean>>;
  setordercreating: React.Dispatch<React.SetStateAction<GlobalOrderFillWithDatasDto | null>>;
}> = ({ showModalCreationOrder, setshowModalCreationOrder, setshowModalSetup, setordercreating }) => {
  //portal
  const modalRoot = document.getElementById("modal-creationOrder");

  const handleCloseModal = () => {
    setshowModalCreationOrder(false);
    reset();
  };

  //hook to handle the creation order request
  const { handleCreationOrder, isCreatingOrder } = useCreationOrder(setordercreating, setshowModalSetup, handleCloseModal);

  // handle form
  const methods = useForm<CreationOrderFormValues>({
    resolver: zodResolver(schemaOrderCreation),
    shouldFocusError: false,
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
    control,
  } = methods;

  const onSubmit: SubmitHandler<CreationOrderFormValues> = (formValues) => {
    handleCreationOrder(formValues);
  };

  return createPortal(
    <Modal
      open={showModalCreationOrder}
      onClose={handleCloseModal}
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
          <Typography sx={{ paddingBottom: "3vh" }} variant="h3">
            Order creation
          </Typography>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="container_form">
          <FormCreationOrder register={register} errors={errors} control={control} />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2vh",
            }}
          >
            <Button onClick={handleCloseModal} variant="outlined">
              Cancel
            </Button>
            <LoadingButton loading={isCreatingOrder} loadingPosition="start" startIcon={isCreatingOrder ? <CircularProgress style={{ marginRight: "-18px" }} /> : <Box></Box>} variant="contained" color="primary" type="submit">
              {isCreatingOrder ? <span>Loading</span> : <>Creation order</>}
            </LoadingButton>
          </div>
        </form>
      </div>
    </Modal>,
    modalRoot ? modalRoot : document.createElement("div")
  );
};

export default ModalCreationOrderContainer;
