"use client";

import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type columnsProps = {
    handleDelete: (id: number) => void;
};

export const columns = ({ handleDelete }: columnsProps): ColumnDef<IProduct>[] => [
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
        cell: ({ row }) => {
            const id = row?.original?.id;
            return (
                <div>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(id)}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
    },
];
