import React from 'react'
import { useForm } from 'react-hook-form';


const ProductAdd = (props) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        props.onAdd(data);
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