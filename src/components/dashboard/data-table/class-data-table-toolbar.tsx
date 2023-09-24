"use client";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "@/components/dashboard/data-table/data-table-view-options";

type ToolbarOption<T> = {
  title: string;
  options: T;
};

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  options?: ToolbarOption<TData>;
}

export function ClassDataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
