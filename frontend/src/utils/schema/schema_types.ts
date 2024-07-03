import { z } from "zod";
import { registrationSchema, loginSchema } from "./auth_schema";
import { missionSchema } from "./employer_schema";
import { serviceSchema } from "./service_schema";


export type registrationSchemaType = z.infer<typeof registrationSchema>;
export type loginSchemaType = z.infer<typeof loginSchema>;
export type missionSchemaType = z.infer<typeof missionSchema>;
export type serviceSchemaType = z.infer<typeof serviceSchema>;
