import { z } from "zod";
import { ALL_CATEGORIES } from "../constants/constant";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const serviceSchema = z.object({
  title: z
    .string()
    .min(15, "title should be more than 15 charaacters")
    .max(150, "the title should be less than 150 characters"),
  description: z
    .string()
    .min(20, "your description should be more than 20 characters")
    .max(300, "your description should be less than 300 characters"),
  price: z.preprocess(
    (val) => Number(val),
    z.number().int().min(0, { message: "price should be above 0" }).positive()
  ),
  tags: z.string().refine((value) => value.split(",").length > 0, {
    message: "There should be at least one tag",
  }),
  images: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});
