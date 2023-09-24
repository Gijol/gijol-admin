import { TotalUserCard } from "@/components/dashboard/total-user-card";
import { UserDataTable } from "@/components/dashboard/user-data-table";

export function UserTabContent() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-2">
        <TotalUserCard />
      </div>
      <section id="class-table">
        <UserDataTable />
      </section>
    </>
  );
}
