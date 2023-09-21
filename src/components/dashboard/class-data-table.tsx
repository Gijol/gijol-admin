import { promises as fs } from "node:fs";
import path from "path";
import { z } from "zod";
import { classSchema } from "@/lib/validations/class";
import Image from "next/image";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import { class_columns } from "@/components/dashboard/data-table/class-columns";

async function getClasses() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/lib/const/tasks.json"),
  );
  const tasks = JSON.parse(data.toString());
  return z.array(classSchema).parse(tasks);
}

export async function ClassDataTable() {
  const tasks = await getClasses();

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
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={class_columns} />
      </div>
    </>
  );
}
