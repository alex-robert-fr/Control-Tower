import { EvaluationEnum } from "@enums";
import { z } from "zod";

export const EvaluationSchema = z.object({
  id: z.number(),
  name: z.string(),
  creation_date: z.string(),
  validation_date: z.string(),
  status: z.nativeEnum(EvaluationEnum),
});

export type Evaluation = z.infer<typeof EvaluationSchema>;
