import { clerk } from "@/lib/axios/clerk";
import { CamelToSnake, UserResource } from "@clerk/types";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import { user_columns } from "@/components/dashboard/data-table/user-columns";

async function getUserList(): Promise<CamelToSnake<UserResource>[]> {
  const res = await clerk.get("/users?limit=500");
  return res.data;
}

export async function UserDataTable() {
  const users = await getUserList();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-2 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Lists</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of gijol users
          </p>
        </div>
      </div>
      <DataTable data={users} columns={user_columns} />
    </div>
  );
}
