import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getAllProducts, getProductById } from "../services/product";

const useProductQuery = (id?: number) => {
    const { data } = useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            return id ? await getProductById(id) : await getAllProducts();
        }
    });

    return { data }
}
export default useProductQuery;