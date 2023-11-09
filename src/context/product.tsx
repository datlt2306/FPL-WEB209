import { createContext, useReducer } from 'react'

export const ProductContext = createContext({} as any)
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_PRODUCT':
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'UPDATE_PRODUCT':
        default:
            return state
    }
}
const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, { products: [], isLoading: false })
    return (
        <>
            <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
        </>
    )
}
export default ProductContextProvider
