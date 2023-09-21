import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clerk } from "@/lib/axios/clerk";

type TotalUsers = {
  object: string;
  total_count: number;
};

async function getTotalUsers(): Promise<TotalUsers> {
  const res = await clerk.get("/users/count");
  return await res.data;
}

export async function TotalUserCard() {
  const totalUsers = await getTotalUsers();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalUsers.total_count} 명</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
