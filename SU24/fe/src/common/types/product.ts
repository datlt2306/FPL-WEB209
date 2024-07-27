export interface IProduct {
    _id?: number | string
    // id?: number,
    name: string
    category?: string[]
    price: number

    description?: string
    discount?: number
    featured?: boolean
    countInStock?: number
}
