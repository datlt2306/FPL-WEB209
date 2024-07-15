import SkeletonTable from "@/components/SkeletonTable";
import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { columns } from "./_components/Columns";
import { DataTable } from "./_components/DataTable";
import { toast } from "@/components/ui/use-toast";

const ProductPage = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isFetching, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
            if (!confirm) return;

            await instance.delete(`/products/${id}`);
            toast({
                title: "Xóa sản phẩm thành công ",
            });
        },
        // làm mới lại API
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const handleDelete = (id: number) => mutate(id);
    if (isLoading || isFetching) return <SkeletonTable />;
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            <DataTable columns={columns({ handleDelete })} data={data?.data} />
        </div>
    );
};

export default ProductPage;
