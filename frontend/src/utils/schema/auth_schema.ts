import { z } from "zod";

export const registrationSchema = z.object({
  email: z.string().email("invalid email").min(1, "email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
  user_type: z.enum(["freelancer", "employer"]),
  first_name: z
    .string()
    .min(1, "first name is required")
    .min(8, "first name must have more than 8 characters"),
  last_name: z
    .string()
    .min(1, "last name is required")
    .min(8, "last name must have more than 8 characters"),
  country: z
    .string()
    .min(1, "country is required")
    .min(8, "country must have more than 3 characters"),
  age: z.number().min(18, { message: "Age must be more than 18" }),
});

export const loginSchema = z.object({
  email: z.string().email("invalid email").min(1, "email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});
