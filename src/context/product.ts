import React from 'react'
import { IProduct } from '../interfaces/Product'

export const ProductContext = React.createContext<IProduct[]>([])
