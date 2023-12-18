import { z } from "zod";
import { EvaluationEnum } from "../enums";

export const EvaluationSchema = z.object({
  id: z.number(),
  name: z.string(),
  creation_date: z.string(),
  validation_date: z.string(),
  status: z.nativeEnum(EvaluationEnum),
});

export type Evaluation = z.infer<typeof EvaluationSchema>;
