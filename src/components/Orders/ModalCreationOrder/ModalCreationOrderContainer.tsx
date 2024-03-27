//compoenent with protal set to page Orders
//display a modal for the creation of an order

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Modal, Typography, Button } from "@mui/material";

import "./ModalCreationOrder.css";
import AddIcon from "@mui/icons-material/Add";

//composant
import FormOrderInformations from "../SECTION INFOS/FormOrderInformations";
import ContainerTextEditor from "../../TextEditor/ContainerTextEditor";

//model
import { ImageFrontType } from "../../../model/Order/model_order";
import { CreationOrderFormValues, schemaOrderCreation } from "../../../model/Order/model_form_Order";

const ModalCreationOrderContainer: React.FC<{
  showModalCreationOrder: boolean;
  setshowModalCreationOrder: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModalCreationOrder, setshowModalCreationOrder }) => {
  //portal
  const modalRoot = document.getElementById("modal-creationOrder");

  // handle form
  const methods = useForm<CreationOrderFormValues>({
    resolver: zodResolver(schemaOrderCreation),
    shouldFocusError: false,
  });
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    register,
    control,
  } = methods;

  const onSubmit: SubmitHandler<CreationOrderFormValues> = (data) => {
    console.log("data");
    console.log("errors", methods.formState);
    console.log(data);
  };

  const handleCloseModal = () => {
    setshowModalCreationOrder(false);
    reset();
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
          <FormOrderInformations register={register} errors={errors} control={control} />
          {/* <FormListSetup /> */}
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return <ContainerTextEditor contentState={value} setContentState={onChange} isEditable={true} size={"long"} title={"Order description :"} showTitle={true} statutIsError={error} />;
            }}
          />

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
            <Button type="submit" startIcon={<AddIcon />} variant="contained">
              Creation order
            </Button>
          </div>
        </form>
      </div>
    </Modal>,
    modalRoot ? modalRoot : document.createElement("div")
  );
};

export default ModalCreationOrderContainer;
