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
  owner: z.string().min(5, "username is required").max(50),
  title: z
    .string()
    .min(15, "title should be more than 15 charaacters")
    .max(150, "the title should be less than 150 characters"),
  image: z
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
  category: z.enum([...ALL_CATEGORIES] as [string, ...string[]]),
  price: z.number().gte(0, "rating should be bigger than 0"),

  description: z
    .string()
    .min(30, "your description should be more than 30 characters")
    .max(300, "your description should be less than 300 characters"),
  rating: z
    .number()
    .gte(0, "rating should be bigger than 0")
    .lte(5, "rating should be less than 5")
    .optional(),
});
