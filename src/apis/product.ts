import { IProduct } from '../interfaces/Product'
import instance from './instance'

export const getProducts = () => {
    return instance.get('/products')
}
export const updateProduct = (product: IProduct) => {
    return instance.patch('/products/' + product.id, product)
}
export const addProduct = (product: IProduct) => {
    return instance.post('/products/', product)
}
