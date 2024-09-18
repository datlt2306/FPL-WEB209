/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProductList = ({ products, onRemove }) => {
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price}
                    <button onClick={() => onRemove(product.id)}>Xóa</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
