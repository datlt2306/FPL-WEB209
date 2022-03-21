import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductAdd = (props) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
      dispatch({type: "ADD_PRODUCT", payload: {id: 5, ...data}});
        // props.onAdd(data);
        // navigate("/admin/product");
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', { required: true, minLength: 5})}/>
        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
        {errors.name && errors.name.type === "minLength" && <span>Trên 5 ký tự</span>}
        <input type="text" {...register('price')}/>
        <button>Thêm sản phẩm</button>
    </form>
  )
}

export default ProductAdd