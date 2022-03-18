import instance from './instance';

export const create = (product) => {
    const url = `/products`;
    return instance.post(url);
}
export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}