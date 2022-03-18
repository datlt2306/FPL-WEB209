import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ProductAdd = (props) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        props.onAdd(data);
        navigate("/admin/product");
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')}/>
        <input type="text" {...register('price')}/>
        <button>Thêm sản phẩm</button>
    </form>
  )
}

export default ProductAdd