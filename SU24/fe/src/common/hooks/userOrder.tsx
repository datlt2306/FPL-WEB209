import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://your-api-url";

interface OrderActionParams {
    userId: string;
    orderId?: string;
    // Thêm các trường khác tùy thuộc vào logic của bạn
}

const ORDER_QUERY_KEY = "order";

const fetchOrder = async (userId: string) => {
    const { data } = await axios.get(`${BASE_URL}/orders/${userId}`);
    return data;
};

const modifyOrder = async (action: string, params: OrderActionParams) => {
    const url = `${BASE_URL}/orders/${action}`;
    const { data } = await axios.post(url, params);
    return data.order;
};
// Tiếp tục từ đoạn code đã cho...

// Định nghĩa các loại hành động
const ACTION_TYPES = {
    CREATE: "create",
    UPDATE: "update",
    UPDATE_STATUS: "updateStatus",
};
// Cập nhật hàm useOrder để bao gồm các hành động này
const useOrder = (userId: string) => {
    const queryClient = useQueryClient();

    const {
        data: order,
        isLoading,
        error,
    } = useQuery({
        queryKey: [ORDER_QUERY_KEY, userId],
        queryFn: () => fetchOrder(userId),
        enabled: !!userId,
    });

    const mutationOptions = {
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: [ORDER_QUERY_KEY, userId],
            }),
    };

    const performMutation = (action: string) => {
        return useMutation({
            mutationFn: (params: OrderActionParams) => modifyOrder(action, params),
            ...mutationOptions,
        });
    };

    const orderActions = (action: string) => ({
        mutate: (params: OrderActionParams) =>
            performMutation(action).mutate({ userId, ...params }),
    });
    // Hàm tạo đơn hàng mới
    const createOrder = (orderDetails) => orderActions(ACTION_TYPES.CREATE).mutate(orderDetails);

    // Hàm cập nhật đơn hàng
    const updateOrder = (orderId, orderDetails) =>
        orderActions(ACTION_TYPES.UPDATE).mutate({ orderId, ...orderDetails });

    // Hàm cập nhật trạng thái đơn hàng
    const updateOrderStatus = (orderId, status) =>
        orderActions(ACTION_TYPES.UPDATE_STATUS).mutate({ orderId, status });

    return {
        order,
        isLoading,
        error,
        createOrder: (orderDetails) => createOrder(orderDetails),
        updateOrder: (orderId, orderDetails) => updateOrder(orderId, orderDetails),
        updateOrderStatus: (orderId, status) => updateOrderStatus(orderId, status),
    };
};

export default useOrder;
