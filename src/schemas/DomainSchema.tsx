import { z } from "zod";

export const DomainSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Domain = z.infer<typeof DomainSchema>;
