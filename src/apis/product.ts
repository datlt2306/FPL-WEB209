import { IProduct } from '../interfaces/Product'
import instance from './instance'

export const getProducts = async () => {
    try {
        const response = await instance.get('/products')
        return response.data
    } catch (error) {
        console.log(`['FETCH_PRODUCTS_ERROR']`, error)
    }
}
export const getProduct = async (id: number) => {
    try {
        const response = await instance.get(`/products/${id}`)
        return response.data
    } catch (error) {
        console.log(`['FETCH_PRODUCT_ERROR']`, error)
    }
}
export const updateProduct = (product: IProduct) => {
    return instance.patch('/products/' + product.id, product)
}
export const addProduct = (product: IProduct) => {
    return instance.post('/products/', product)
}
