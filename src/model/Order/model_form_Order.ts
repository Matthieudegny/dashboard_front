import { z } from "zod";

export const schemaOrderCreation = z.object({
  asset: z.string().min(1, "Asset is required"),
  type: z.string().min(1, "Type is required"),
  creationdate: z.coerce.date({
    errorMap: ({ code }, { defaultError }) => {
      console.log("code", code);
      console.log("defaultError", defaultError);
      if (code == "invalid_date") return { message: "Date is required" };
      return { message: defaultError };
    },
  }),
  qty$: z
    .string()
    .min(1, "Qty $ is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "Qty $ must be a number",
    }),
  qtyPercent: z
    .string()
    .min(1, "Qty % is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "Qty % must be a number",
    }),
  sLPercentPF: z
    .string()
    .min(1, "SLPercentPF is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "SLPercentPF must be a number",
    }),
  qtyAsset: z
    .string()
    .min(1, "QtyAsset is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "QtyAsset must be a number",
    }),
  buyingPrice: z
    .string()
    .min(1, "BuyingPrice is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "BuyingPrice must be a number",
    }),
  sLprice: z
    .string()
    .min(1, "SL price is required")
    .refine((value) => /^\d+$/.test(value), {
      message: "SL price must be a number",
    }),
  description: z.string().min(1, "Description is required"),
});

export type CreationOrderFormValues = z.infer<typeof schemaOrderCreation>;

export const schemaCreationImage = z.object({
  title: z.string().min(5, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Image is required"),
});

export type CreationImageFormValues = z.infer<typeof schemaCreationImage>;
