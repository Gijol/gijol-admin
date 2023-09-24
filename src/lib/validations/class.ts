import * as z from "zod";

export const courseSchema = z.object({
  courseCode: z.string(),
  courseCredit: z.number(),
  courseName: z.string(),
  courseTags: z.array(z.string().regex(/^(HUS|PPE|부전공|전공)$/)),
  description: z.string(),
  id: z.number(),
  prerequisite: z.string(),
});

const courseHistorySchema = z.object({
  year: z.number(),
  semester: z.string(),
  courseProfessor: z.string(),
  courseTime: z.string(),
  courseRoom: z.string(),
});

const sortSchema = z.object({
  empty: z.boolean(),
  sorted: z.boolean(),
  unsorted: z.boolean(),
});

const pageableSchema = z.object({
  offset: z.number(),
  pageNumber: z.number(),
  pageSize: z.number(),
  paged: z.boolean(),
  sort: sortSchema,
  unpaged: z.boolean(),
});

export const coursePageSchema = z.object({
  content: z.array(courseSchema),
  empty: z.boolean(),
  first: z.boolean(),
  last: z.boolean(),
  number: z.number(),
  numberOfElements: z.number(),
  pageable: pageableSchema,
  size: z.number(),
  sort: sortSchema,
  totalElements: z.number(),
  totalPages: z.number(),
});

export const courseMicroSchema = z.object({
  courseHistoryResponses: z.array(courseHistorySchema),
});

export type CourseMacro = z.infer<typeof courseSchema>;
export type CourseMicro = z.infer<typeof courseMicroSchema>;
export type CoursesPerPage = z.infer<typeof coursePageSchema>;
