import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { getAllProducts, removeProduct } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

type Props = {};

const ProductPage = (props: Props) => {
    // const [products, setProducts] = useState<IProduct[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [isError, setIsError] = useState<boolean>(false);
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await getAllProducts();
    //             if (response.status !== 200) {
    //                 throw new Error("Failed to fetch products");
    //             }
    //             setProducts(response.data);
    //         } catch (error) {
    //             setIsError(true);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);

    // const removeItem = async (product: IProduct) => {
    //     const confirm = window.confirm(
    //         "Bạn có chắc chắn muốn xóa sản phẩm này không?",
    //     );
    //     if (!confirm) return;
    //     try {
    //         const response = await removeProduct(product);
    //         if (response && response.status !== 200)
    //             return alert("Xóa thất bại");
    //         setProducts(products.filter((item) => item._id !== product._id));
    //     } catch (error) {
    //         setIsError(true);
    //     }
    // };

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error</div>;
    // return (
    //     <div>
    //         <h1>Quản lý sản phẩm</h1>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>#</th>
    //                     <th>Tên</th>
    //                     <th>Giá</th>
    //                     <th></th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {products &&
    //                     products.map((item: IProduct, index) => (
    //                         <tr key={index}>
    //                             <td>{index + 1}</td>
    //                             <td>{item.name}</td>
    //                             <td>{item.price}</td>
    //                             <td>
    //                                 <button onClick={() => removeItem(item)}>
    //                                     Xóa
    //                                 </button>
    //                             </td>
    //                         </tr>
    //                     ))}
    //             </tbody>
    //         </table>
    //     </div>
    // );

    // query : Lấy toàn bộ danh sách, lấy 1 sản phẩm theo id
    // mutation: thêm, sửa, xóa sản phẩm

    const queryClient = useQueryClient();

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });

    const mutation = useMutation({
        mutationFn: async (id) => {
            const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
            if (!confirm) return;
            return await instance.delete(`/products/${id}/sdd`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    if (isLoading || isFetching) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (mutation?.isError) return <div>Error: {mutation.error.message}</div>;
    return (
        <div>
            {data &&
                data.data.map((item: any, index: number) => (
                    <div key={index}>
                        {item.name} <button onClick={() => mutation.mutate(item.id!)}>Xóa</button>
                    </div>
                ))}
        </div>
    );
};

export default ProductPage;
