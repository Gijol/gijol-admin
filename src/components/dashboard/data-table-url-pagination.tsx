"use client";

import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";

interface DataTableURLPaginationProps<TData> {
  table: Table<TData>;
  activePage?: number;
  totalPages?: number;
  pageSize?: number;
}

export default function DataTableURLPagination<TData>({
  table,
  activePage,
  totalPages,
  pageSize,
}: DataTableURLPaginationProps<TData>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex-row-reverse items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
              router.push(`${pathname}?page=${activePage}&size=${value}`);
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {(activePage as number) + 1} of {totalPages as number}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() =>
              router.push(`${pathname}?page=${0}&size=${pageSize}`)
            }
            disabled={activePage === 0}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              router.push(
                `${pathname}?page=${
                  (activePage as number) + 1
                }&size=${pageSize}`,
              )
            }
            disabled={activePage === 0}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              router.push(
                `${pathname}?page=${
                  (activePage as number) + 1
                }&size=${pageSize}`,
              )
            }
            disabled={activePage === (totalPages as number) - 1}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() =>
              router.push(
                `${pathname}?page=${
                  (totalPages as number) - 1
                }&size=${pageSize}`,
              )
            }
            disabled={(activePage as number) === (totalPages as number) - 1}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
