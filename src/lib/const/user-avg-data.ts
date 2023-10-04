import { ClassScore, classScoreSchema } from "@/lib/validations/class_score";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

export async function getUserAvgData() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/lib/const/user_avg_score_data.json"),
  );
  const tasks = JSON.parse(data.toString());
  return z.array(classScoreSchema).parse(tasks);
}
