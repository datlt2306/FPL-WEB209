export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export type ProductFormData = Omit<IProduct, "id">;