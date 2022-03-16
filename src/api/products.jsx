import instance from './instance';

export const create = (product) => {
    const url = `/products`;
    return instance.post(url);
}
export const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
}