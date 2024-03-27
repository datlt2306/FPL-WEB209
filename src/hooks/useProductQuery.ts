import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../services/product";

const useProductQuery = (id?: number | string) => {
    const {
        data,
        ...rest
    } = useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => id ? await getProduct(id!) : await getProducts(),
    });

    return { data, ...rest }
}
export default useProductQuery;