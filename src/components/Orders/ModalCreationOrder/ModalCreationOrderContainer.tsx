//compoenent with protal set to page Orders
//display a modal for the creation of an order

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { z } from "zod";
import { ZodType, ZodTypeAny, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { Modal, Typography, TextField, Button } from "@mui/material";

import "./ModalCreationOrder.css";
import AddIcon from "@mui/icons-material/Add";

//composant
import FormOrderInformations from "./SECTION INFOS/FormOrderInformations";
import FormCreationImageOrder from "./SECTION IMAGE/FormCreationImageOrder";
import FormOrderDescription from "./SECTION INFOS/FormOrderDescription";
import ListImagesToDisplay from "./SECTION IMAGE/ListImagesToDisplay";

//model
import { ImageFrontType } from "../../../model/Order/model_order";

const schema = z.object({
  asset: z.string().min(1, "Asset is required"),
  type: z.string().min(1, "Type is required"),
  Creationdate: z.coerce.date({
    errorMap: ({ code }, { defaultError }) => {
      console.log("code", code);
      console.log("defaultError", defaultError);
      if (code == "invalid_date") return { message: "Creation date is required" };
      return { message: defaultError };
    },
  }),
  qty$: z
    .string()
    .min(1, "Qty $ is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "Zip code must contain only numeric characters",
    }),

  // .int("Qty $ must be a number")
  // .positive("Qty $ must be a positiv number"),
  // qty$: z.number({ required_error: "Qty$ is required" }).positive({ message: "Qty $ must be a positiv number" }),
  // qtyPercent: z.number().min(1, "Qty % must be greater than 0"),
  // SLPercentPF: z.number().min(1, "SL %PF must be greater than 0"),
  // qtyAsset: z.number().min(1, "Qty Asset must be greater than 0"),
  // buyingPrice: z.number().min(1, "Buying price must be greater than 0"),
  // SLprice: z.number().min(1, "SL price must be greater than 0"),
});

type FormValues = z.infer<typeof schema>;

const ModalCreationOrderContainer: React.FC<{
  showModalCreationOrder: boolean;
  setshowModalCreationOrder: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showModalCreationOrder, setshowModalCreationOrder }) => {
  //portal
  const modalRoot = document.getElementById("modal-creationOrder");

  const [listImageOrder, setlistImageOrder] = useState<ImageFrontType[]>([]);

  // handle form
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    shouldFocusError: false,
  });
  const {
    //fonction de soumission du formulaire
    handleSubmit,
    reset,
    //isSubmitting pour le spinner/waiting
    formState: { errors, isSubmitting },
    //lie linput avec le register
    register,
    control,
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data");
    console.log("errors", methods.formState);
    console.log(data);
    // reset();
    //en cas de mauavise reponse du abck, j epux set certains inputs en erreur
    // setError();
    // onClose();
  };

  useEffect(() => {
    if (methods.formState.errors) {
      if (methods.formState.errors) {
        const firstErrorField = Object.keys(methods.formState.errors)[0];
        const firstErrorInput = document.getElementById(firstErrorField);
        if (firstErrorInput) {
          firstErrorInput.blur();
        }
      }
      console.log("errors", methods.formState.errors);
    }
  }, [methods.formState]);

  return createPortal(
    // <FormProvider {...methods}>
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
      <form onSubmit={handleSubmit(onSubmit)} className="modal_container">
        <header>
          <Typography sx={{ paddingBottom: "2vh" }} variant="h3">
            Order creation
          </Typography>
        </header>

        <div className="container_form">
          <div className="section_top">
            <div className="section_top_half">
              <FormOrderInformations register={register} errors={errors} control={control} />
            </div>
            <div className="section_top_half">
              <FormCreationImageOrder listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />
            </div>
          </div>
          <div className="section_middle">
            <ListImagesToDisplay listImageOrder={listImageOrder} setlistImageOrder={setlistImageOrder} />
          </div>
          <div className="section_bottom">
            <div className="modal_creationOrder_form_container">
              <FormOrderDescription />
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
              <Button type="submit" startIcon={<AddIcon />} variant="contained">
                Creation order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Modal>,
    // </FormProvider>,
    modalRoot ? modalRoot : document.createElement("div")
  );
};

export default ModalCreationOrderContainer;
