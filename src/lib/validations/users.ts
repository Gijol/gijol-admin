import * as z from "zod";

export const userSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type User = z.infer<typeof userSchema>;
