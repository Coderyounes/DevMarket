import { z } from "zod";

export const profileSchema = z.object({
  firstname: z
    .string()
    .min(1, "first name is required")
    .min(4, "first name must have more than 4 characters"),
  lastname: z
    .string()
    .min(1, "last name is required")
    .min(4, "last name must have more than 4 characters"),
  skills: z
    .string()
    .refine((value) => value.split(",").length > 0, {
      message: "There should be at least one skill",
    })
    .optional(),
});
