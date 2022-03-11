import instance from './instance';

export const create = (product) => {
    const url = `/products`;
    return instance.post(url);
}