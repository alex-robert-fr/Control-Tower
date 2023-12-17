import { z } from "zod";

export const ProgramSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Program = z.infer<typeof ProgramSchema>;
