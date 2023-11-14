import { IProduct } from '../interfaces/Product'
import instance from './config'

export const getProducts = () => {
    return instance.get('/products')
}
export const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
export const editProduct = (product: IProduct) => {
    return instance.patch('/products/' + product.id, product)
}
