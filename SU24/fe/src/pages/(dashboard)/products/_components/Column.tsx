import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

type columnsProps = {
    handleDelete: (id: number) => void;
};

export const columns = ({ handleDelete }: columnsProps): ColumnDef<any>[] => [
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
            return (
                <div>
                    <Button variant="destructive" onClick={() => handleDelete(row?.original?.id)}>
                        Xóa
                    </Button>
                </div>
            );
        },
    },
];
