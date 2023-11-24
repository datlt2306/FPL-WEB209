import { createContext, useReducer } from 'react'
import { IProduct } from '../common/Type'
import { produce } from 'immer'
export const ProductContext = createContext([] as any)
const initialState = {
    products: [],
    product: {}
}
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            state.products = action.payload
            return
        case 'ADD_PRODUCT':
            state.products.push(action.payload)
            return
        case 'GET_PRODUCT':
            const id = action.payload
            state.product = state.products.find((product: IProduct) => product.id === id)
            return
        case 'UPDATE_PRODUCT':
            const newProduct = action.payload
            state.products = state.products.map((product: IProduct) =>
                product.id === newProduct.id ? newProduct : product
            )
            return
        case 'DELETE_PRODUCT':
            const productId = action.payload
            const confirm = window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')
            if (!confirm) return state
            state.products = state.products.filter((product: IProduct) => product.id !== productId)
            return
        default:
            return state
    }
}
const ProductContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(reducer), initialState)
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
