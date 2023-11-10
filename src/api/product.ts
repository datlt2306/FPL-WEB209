import { IProduct } from '../interfaces/Product'
import instance from './config'

export const getAll = () => instance.get('/products')
export const add = (product: IProduct) => instance.post('/products', product)
