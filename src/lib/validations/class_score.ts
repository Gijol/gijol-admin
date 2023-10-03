import { z } from "zod";

export const classScoreSchema = z.object({
  course_code: z.string().nullable(),
  course_name: z.string().nullable(),
  year: z.string().nullable(),
  semester: z.string().nullable(),
  average_grade: z.number().nullable(),
  num_students: z.number().nullable(),
});

export type ClassScore = z.infer<typeof classScoreSchema>;
