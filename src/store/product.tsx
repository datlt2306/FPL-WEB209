import React, { useReducer } from 'react'
import { produce } from 'immer'

export const ProductContext = React.createContext({} as any)

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            const id = action.payload
            state.product = state.products.find((product: any) => product.id === id)
            return
        case 'FETCH_PRODUCTS':
            state.products = action.payload
            return
        case 'ADD_PRODUCT':
            state.products.push(action.payload)
            return
        case 'EDIT_PRODUCT':
            const newProduct = action.payload
            state.products = state.products.map((product: any) => (product.id === newProduct.id ? newProduct : product))
            return
        default:
            return state
    }
}

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(produce(reducer), {
        products: [],
        product: {},
        isLoading: false,
        error: ''
    })
    return (
        <>
            <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider
