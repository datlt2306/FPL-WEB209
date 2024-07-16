/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ProductPage = () => {
    // const [products, setProducts] = useState<IProduct[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [isError, setIsError] = useState<boolean>(false);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             // thiết lập loading trước khi gọi API
    //             setIsLoading(true);
    //             // gọi API
    //             const response = await getAllProducts();
    //             // nếu status code khác 200 ( không thành công ) thì in ra lỗi
    //             if (response.status !== 200) {
    //                 console.log(`Error: ${response.status}`);
    //                 return;
    //             }
    //             // set dữ liệu trả về vào state
    //             setProducts(response.data);
    //             // nếu có lỗi thì set isError thành false
    //         } catch (error) {
    //             setIsError(true);
    //         } finally {
    //             // sau khi gọi API xong thì set isLoading thành false
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);

    // const removeItem = async (id: number) => {
    //     const confirm = window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm này không?`);
    //     if (!confirm) return;
    //     try {
    //         const response = await deleteProduct(id);
    //         if (response.status !== 200) {
    //             console.log(`Error: ${response.status}`);
    //             return;
    //         }
    //         // set lại dữ liệu sau khi xóa
    //         setProducts(products.filter((item) => item.id !== id));
    //     } catch (error) {
    //         setIsError(true);
    //     }
    // };

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error</div>;
    // query: giống GET - lấy dữ liệu
    // mutation: POST - PUT - DELETE

    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get(`/products`),
    });

    const { mutate } = useMutation({
        mutationFn: (id) => instance.delete(`/products/${id}`),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["products"],
            }),
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    return (
        <div>
            {data?.data &&
                data?.data.map((item: any, index: number) => (
                    <div key={index}>
                        {item.name} - {item.price}
                        <button onClick={() => mutate(item.id!)}>Xóa</button>
                    </div>
                ))}
        </div>
    );
};

export default ProductPage;

// context + reducer

// global state:
// client state
// server state: lưu trạng thái ở server
