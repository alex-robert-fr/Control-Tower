import { z } from "zod";

export const ManagerSchema = z.object({
  id: z.number(),
  name: z.string(),
  lastname: z.string(),
});

export type Manager = z.infer<typeof ManagerSchema>;
