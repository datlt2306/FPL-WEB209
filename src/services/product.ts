import { AxiosResponse } from 'axios'
import { IProduct } from '../common/Type'
import instance from '@/core/api'

export const getAll = async () => {
    try {
        const response: AxiosResponse<IProduct[]> = await instance.get('/products')
        return response.data || []
    } catch (error) {
        console.log('FETCH_PRODUCTS_ERROR', error)
    }
}
export const getOne = async (id: number) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.get(`/products/${id}`)
        return response.data || {}
    } catch (error) {
        console.log('FETCH_PRODUCT_ERROR', error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.post('/products', product)
        return response.data || {}
    } catch (error) {
        console.log('ADD_PRODUCTS_ERROR', error)
    }
}
export const editProduct = async (product: IProduct) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.patch('/products/' + product.id, product)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}
export const deleteProduct = async (id: number) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.delete('/products/' + id)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}
