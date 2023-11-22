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
export const updateProduct = async (product: IProduct) => {
    try {
        const response = await instance.patch(`/products/${product.id}`, product)
        return response.data
    } catch (error) {
        console.log(`['UPDATE_PRODUCT_ERROR']`, error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post('/products/', product)
        return response.data
    } catch (error) {
        console.log(`['ADD_PRODUCT_ERROR']`, error)
    }
}
export const deleteProduct = async (product: IProduct) => {
    try {
        // JSON-server {}
        await instance.delete(`/products/${product.id}`)

        // Nodejs 
        // const response = await instance.delete(`/products/${product.id}`)
        // return response.data
    } catch (error) {
        console.log(`['DELETE_PRODUCT_ERROR']`, error)
    }
}
