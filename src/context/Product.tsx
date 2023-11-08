import { createContext, useReducer } from 'react'
import { IProduct } from '../interfaces/Product'

export const ProductContext = createContext([] as any)
const initialState = {
    products: [],
    product: {}
}
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'GET_PRODUCT':
            const id = action.payload
            return {
                ...state,
                product: state.products.find((product: IProduct) => product.id === id)
            }
        case 'UPDATE_PRODUCT':
            const newProduct = action.payload
            return {
                ...state,
                products: state.products.map((product: IProduct) =>
                    product.id === newProduct.id ? newProduct : product
                )
            }
        case 'DELETE_PRODUCT':
            const productId = action.payload
            const confirm = window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')
            if (!confirm) return state
            return {
                ...state,
                products: state.products.filter((product: IProduct) => product.id !== productId)
            }
        default:
            return state
    }
}
const ProductContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <ProductContext.Provider
                value={{
                    state,
                    dispatch
                }}
            >
                {children}
            </ProductContext.Provider>
        </>
    )
}
export default ProductContextProvider
