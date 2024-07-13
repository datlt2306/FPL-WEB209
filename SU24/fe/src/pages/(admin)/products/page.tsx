import { IProduct } from "@/common/types/product";
import { getAllProducts } from "@/services/product";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await getAllProducts();
                if (response.status !== 200) {
                    console.log(`Error: ${response.status}`);
                    return;
                }
                setProducts(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <div>
            {products &&
                products.map((item, index) => (
                    <div key={index}>
                        {item.name} - {item.price}
                    </div>
                ))}
        </div>
    );
};

export default ProductPage;
