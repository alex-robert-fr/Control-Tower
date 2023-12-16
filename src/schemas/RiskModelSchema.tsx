import { z } from "zod";

export const RiskModelSchema = z.object({
  id: z.number(),
  model_name: z.string(),
});

export type RiskModel = z.infer<typeof RiskModelSchema>;
