import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import instance from "@/configs/axios";
import { getAllProducts } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "./_components/DataTable";
import { columns } from "./_components/Column";
import SkeletonTable from "@/components/SkeletonTable";
import { toast } from "@/components/ui/use-toast";

type Props = {};

const ProductsPage = (props: Props) => {
    // const [products, setProducts] = useState<IProduct[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [isError, setIsError] = useState<boolean>(false);
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await getAllProducts();
    //             if (response.status !== 200) {
    //                 return setIsError(true);
    //             }
    //             setProducts(response.data);
    //         } catch (error) {
    //             setIsError(true);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error</div>;

    // query: lấy danh sách sản phẩm, lấy 1 sản phẩm
    // mutation: thêm, sửa, xóa sản phẩm

    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get(`/products/`),
    });

    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            const confirm = window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm này không?`);
            if (!confirm) return;
            await instance.delete(`/products/${id}`);
        },
        onSuccess: () => {
            toast({
                variant: "success",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            });

            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const handleDelete = (id: number) => {
        mutate(id);
    };
    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between mb-5">
                <h1>Quản lý sản phẩm</h1>
                <Button variant="violet">
                    <Plus /> Thêm
                </Button>
            </div>
            {isLoading ? (
                <SkeletonTable />
            ) : (
                <DataTable columns={columns({ handleDelete })} data={data?.data} />
            )}
        </div>
    );
};

export default ProductsPage;

/**
 * SERVER ( API )
 * | - GET/products
 * setState
 * |
 * render
 */
