import React, { useReducer } from 'react'

export const ProductContext = React.createContext({} as any)

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            const id = action.payload
            return {
                ...state,
                product: state.products.find((product: any) => product.id === id)
            }
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'EDIT_PRODUCT':
            const newProduct = action.payload
            return {
                ...state,
                products: state.products.map((product: any) => (product.id === newProduct.id ? newProduct : product))
            }
        default:
            return state
    }
}

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, {
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
