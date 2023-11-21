import { AxiosResponse } from 'axios'
import { IProduct } from '../interfaces/Product'
import instance from './config'

export const getProducts = async () => {
    try {
        const response: AxiosResponse<IProduct[]> = await instance.get('/products')
        return response.data || []
    } catch (error) {
        console.log('[API_FETCHING_PRODUCTS_ERROR]', error)
    }
}
export const getOneProduct = async (id: number) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.get(`/products/${id}`)
        return response.data || {}
    } catch (error) {
        console.log('[API_FETCHING_PRODUCT_ERROR]', error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post('/products', product)
        return response.data
    } catch (error) {
        console.log('[API_CREATE_PRODUCT_ERROR]', error)
    }
}
export const editProduct = async (product: IProduct) => {
    try {
        const response = await instance.patch('/products/' + product.id, product)
        return response.data
    } catch (error) {
        console.log('[API_UPDATE_PRODUCT_ERROR]', error)
    }
}
export const deleteProduct = async (id: number) => {
    try {
        // Nếu sử dụng json-server thì dùng cách này
        await instance.delete('/products/' + id)
        return null
        // Nếu sử dụng nodejs thì dùng cách này
        // const response = await instance.delete('/products/' + id)
        // return response.data
    } catch (error) {
        console.log('[API_UPDATE_PRODUCT_ERROR]', error)
    }
}
