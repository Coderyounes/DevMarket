import { z } from "zod";

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const registrationSchema = z.object({
  email: z.string().email("invalid email").min(1, "email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
  usertype: z.enum(["freelance", "employer"]),
  firstname: z
    .string()
    .min(1, "first name is required")
    .min(4, "first name must have more than 4 characters"),
  lastname: z
    .string()
    .min(1, "last name is required")
    .min(4, "last name must have more than 4 characters"),
  country: z
    .string()
    .min(1, "country is required")
    .min(4, "country must have more than 4 characters"),
  age: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .int()
      .min(19, { message: "You must be at least 19 years old" })
      .positive()
  ),
});

export const loginSchema = z.object({
  email: z.string().email("invalid email").min(1, "email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});
