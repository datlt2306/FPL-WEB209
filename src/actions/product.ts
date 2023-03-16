export const fetchProducts = () => (dispatch: any) => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => dispatch({
            type: "GET_PRODUCTS",
            payload: data
        }
        ))
};
export const addProducts = (product) => (dispatch) => {
    fetch('http://localhost:3000/products', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(product)
    }).then(response => response.json())
        .then(data => dispatch({ type: "CREATE_PRODUCT", payload: data }))
}
export const deleteProduct = (id: any) => (dispatch: any) => {
    fetch('http://localhost:3000/products/' + id, {
        method: "DELETE",
    }).then(response => response.json())
        .then(() => dispatch({ type: "DELETE_PRODUCT", payload: id }))
}
export const changeProduct = (product: any) => (dispatch: any) => {
    fetch('http://localhost:3000/products/' + product.id, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => dispatch({ type: "UPDATE_PRODUCT", payload: data }))
}