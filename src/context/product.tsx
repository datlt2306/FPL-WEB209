import { createContext, useReducer } from 'react'
import { produce } from 'immer'
import { IProduct } from '../interfaces/Product'

export const ProductContext = createContext({} as any)
const reducer = (state: any, action: any) => {
    console.log('action', action)
    switch (action.type) {
        case 'GET_PRODUCTS':
            state.products = action.payload
            return
        case 'GET_PRODUCT':
            state.product = action.payload
            return
        case 'ADD_PRODUCT':
            state.products.push(action.payload)
            return
        case 'UPDATE_PRODUCT':
            const newProduct = action.payload
            state.products = state.products.map((product: IProduct) =>
                product.id === newProduct.id ? newProduct : product
            )
            return
        default:
            return state
    }
}
const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(produce(reducer), { products: [], isLoading: false, product: {} })
    return (
        <>
            <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
        </>
    )
}
export default ProductContextProvider
