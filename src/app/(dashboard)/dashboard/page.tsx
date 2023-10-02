import { Metadata } from "next";
import Image from "next/image";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Search } from "@/components/dashboard/search";
import { UserNav } from "@/components/dashboard/user-nav";

import { UserTabContent } from "@/components/dashboard/user-tab-content";
import { ClassDataTable } from "@/components/dashboard/class-data-table";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="users" className="space-y-4">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="space-y-4">
              <UserTabContent />
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <ClassDataTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
