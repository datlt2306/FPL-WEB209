import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getAllProducts } from "../services/product";

const useProductQuery = () => {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return await getAllProducts();
        }
    });

    return { data }
}
export default useProductQuery;