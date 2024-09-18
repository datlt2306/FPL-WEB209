/* eslint-disable react/prop-types */
const ProductAdd = ({ onHandleSubmit, onHandleChange }) => {
    return (
        <form onSubmit={onHandleSubmit}>
            <div className="form-group">
                <label htmlFor="">Tên sản phẩm</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Tên sản phẩm"
                    onChange={onHandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Danh mục</label>
                <select name="category" id="" onChange={onHandleChange}>
                    <option value="1">Danh mục A</option>
                    <option value="2">Danh mục B</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Giá sản phẩm</label>
                <input
                    type="number"
                    name="price"
                    placeholder="Giá sản phẩm"
                    onChange={onHandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Ảnh sản phẩm</label>
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Ảnh sản phẩm"
                    onChange={onHandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Trạng thái</label>
                <input type="checkbox" name="available" onChange={onHandleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="">Mô tả sản phẩm</label>
                <textarea name="description" id="" onChange={onHandleChange}></textarea>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default ProductAdd;
