import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://your-api-url";

export const login = async (credentials) => {
    const { data } = await axios.post(`${BASE_URL}/login`, credentials);
    return data;
};

export const refreshToken = async (token) => {
    const { data } = await axios.post(`${BASE_URL}/refresh-token`, { token });
    return data;
};

const useAuth = () => {
    const queryClient = useQueryClient();

    const loginMutation = useMutation(login, {
        onSuccess: (data) => {
            // Lưu trữ access token và refresh token
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
        },
    });

    const refreshMutation = useMutation(refreshToken, {
        onSuccess: (data) => {
            // Cập nhật access token mới
            localStorage.setItem("accessToken", data.accessToken);
        },
    });

    const fetchWithRefresh = async (url) => {
        const accessToken = localStorage.getItem("accessToken");
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data;
        } catch (error) {
            if ((error as any).response.status === 401) {
                // Access token hết hạn, cần làm mới
                const refreshTokenValue = localStorage.getItem("refreshToken");
                await refreshMutation.mutateAsync(refreshTokenValue as void);
                const newAccessToken = localStorage.getItem("accessToken");
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${newAccessToken}`,
                    },
                });
                return response.data;
            }
            throw error;
        }
    };

    return { loginMutation, fetchWithRefresh };
};

export default useAuth;
