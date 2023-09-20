import * as z from "zod";

export const classSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Class = z.infer<typeof classSchema>;
