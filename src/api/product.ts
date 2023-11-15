import { AxiosResponse } from 'axios'
import { IProduct } from '../interfaces/Product'
import instance from './config'

export const getAll = async () => {
    try {
        const response: AxiosResponse<IProduct[]> = await instance.get('/products')
        return response.data || []
    } catch (error) {
        console.log('FETCH_PRODUCTS_ERROR', error)
    }
}
export const add = async (product: IProduct) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.post('/products', product)
        return response.data || {}
    } catch (error) {
        console.log('ADD_PRODUCTS_ERROR', error)
    }
}
export const edit = async (product: IProduct) => {
    try {
        const response: AxiosResponse<IProduct> = await instance.patch('/products/' + product.id, product)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}
