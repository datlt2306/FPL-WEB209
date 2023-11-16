import { AxiosResponse } from 'axios'
import { IProduct } from '../interfaces/Product'
import instance from './config'

export const getProducts = async () => {
    try {
        const response: AxiosResponse<IProduct[]> = await instance.get('/products')
        return response.data
    } catch (error) {
        console.log('[API_FETCHING_PRODUCT_ERROR]', error)
    }
}
export const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
export const editProduct = (product: IProduct) => {
    return instance.patch('/products/' + product.id, product)
}
