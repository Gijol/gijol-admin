import { promises as fs } from "node:fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "@/lib/validations/tasks";
import Image from "next/image";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import { class_columns } from "@/components/dashboard/data-table/class-columns";
import { gijol } from "@/lib/axios/gjol";
import { coursePageSchema } from "@/lib/validations/class";

async function getCourses() {
  const res = await gijol.get(
    "/api/v1/courses?courseSearchCode=NONE&page=0&size=20",
  );
  return coursePageSchema.parse(res.data);
}

export async function ClassDataTable() {
  const courses = await getCourses();

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-2 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Class data table
            </h2>
            <p className="text-muted-foreground">List of classes in GIST</p>
          </div>
          pnpm
        </div>
        <DataTable data={courses.content} columns={class_columns} />
      </div>
    </>
  );
}
