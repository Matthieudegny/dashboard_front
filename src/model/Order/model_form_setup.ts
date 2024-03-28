import { z } from "zod";

export const schemaSetupCreation = z.object({
  title: z.string().min(5, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

export type CreationSetupFormValues = z.infer<typeof schemaSetupCreation>;

export const schemaSetupSelection = z.object({
  selectedSetups: z.array(z.number()).min(1, "Select at least one setup"),
});

export type SelectionSetupFormValues = z.infer<typeof schemaSetupSelection>;
