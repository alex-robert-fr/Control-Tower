import { z } from "zod";
import { StatusEnum } from "../enums";
import { EvaluationSchema } from "./EvaluationSchema";

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  reference: z.string(),
  status: z.nativeEnum(StatusEnum),
  manager_id: z.number(),
  risk_model_id: z.number().nullable(),
  start_date: z.string(),
  end_date: z.string().nullable().optional(),
  description: z.string(),
  domain: z.number(),
  program: z.number().nullable().optional(),
  evaluation: EvaluationSchema.array(),
});

export type Project = z.infer<typeof ProjectSchema>;
