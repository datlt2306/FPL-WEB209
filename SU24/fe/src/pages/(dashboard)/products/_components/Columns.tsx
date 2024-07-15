"use client";

import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash, Trash2 } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<IProduct>[] = [
    {
        accessorKey: "name",
        header: "Tên sản phẩm",
    },
    {
        accessorKey: "price",
        header: "Giá sản phẩm",
    },
    {
        id: "actions",
        cell: () => {
            return (
                <div>
                    <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
    },
];
