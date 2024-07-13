/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '@/configs/axios';
import { AxiosResponse } from 'axios';

export const getAllProducts = async (): Promise<AxiosResponse<any>> => {
    try {
        return await instance.get(`/products`);
    } catch (error) {
        return {
            data: [],
            status: 500,
            statusText: 'Internal Server Error',
            headers: {},
            config: {} as any
        };
    }
}
export const deleteProduct = async (id: number) => {
    try {
        return await instance.delete(`/products/${id}`);
    } catch (error) {
        return error;
    }
}