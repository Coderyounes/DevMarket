import { z } from "zod";
import { ALL_CATEGORIES } from "../constants/constant";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const missionSchema = z.object({
  owner: z.string().min(5, "username is required").max(50),
  title: z
    .string()
    .min(15, "title should be more than 15 charaacters")
    .max(150, "the title should be less than 150 characters"),
  category: z.enum([...ALL_CATEGORIES] as [string, ...string[]]),
  price: z.number().gte(0, "price should be bigger than 0"),
  description: z
    .string()
    .min(30, "your description should be more than 30 characters")
    .max(300, "your description should be less than 300 characters"),
});
