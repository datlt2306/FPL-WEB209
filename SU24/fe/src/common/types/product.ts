export interface IProduct {
    // _id?: number | string
    id: number | string
    name: string
    categoryId?: string
    price: number

    description: string
    discount?: number
    featured?: boolean
    countInStock?: number
}
