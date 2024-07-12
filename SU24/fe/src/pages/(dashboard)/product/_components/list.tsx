import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { useProductQuery } from "@/common/hooks/useProductQuery";
import { useState } from "react";
import { columns } from "./Column";
import DataTable from "./DataTable";
import FooterTable from "./FooterTable";
import HeaderTable from "./HeaderTable";

const ProductList = () => {
    const { data, isLoading } = useProductQuery({
        _expand: "category",
        _limit: 100,
    });
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {},
    );
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data: data?.data ?? [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    return (
        <>
            <div className="flex justify-between items-center py-3">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Quản lý sản phẩm
                    </h2>
                </div>
                <div>
                    <Link
                        to="/admin/products/add"
                        className="flex items-center"
                    >
                        <Button>
                            <Plus />
                            Add Product
                        </Button>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="my-5">
                <div className="w-full">
                    <div className="flex items-center py-4">
                        <HeaderTable table={table} />
                    </div>
                    <div className="rounded-md border">
                        {isLoading ? (
                            <>
                                <table className="w-full">
                                    <thead>
                                        <th>
                                            <Skeleton className="w-full h-[25px] rounded-full" />
                                        </th>
                                        <th>
                                            <Skeleton className="w-full h-[25px] rounded-full" />
                                        </th>
                                        <th>
                                            <Skeleton className="w-full h-[25px] rounded-full" />
                                        </th>
                                        <th>
                                            <Skeleton className="w-full h-[25px] rounded-full" />
                                        </th>
                                        <th>
                                            <Skeleton className="w-full h-[25px] rounded-full" />
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Skeleton className="w-full h-[25px] rounded-full" />
                                            </td>
                                            <td>
                                                <Skeleton className="w-full h-[25px] rounded-full" />
                                            </td>
                                            <td>
                                                <Skeleton className="w-full h-[25px] rounded-full" />
                                            </td>
                                            <td>
                                                <Skeleton className="w-full h-[25px] rounded-full" />
                                            </td>
                                            <td>
                                                <Skeleton className="w-full h-[25px] rounded-full" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        ) : (
                            <DataTable table={table} column={columns} />
                        )}
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <FooterTable table={table} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
