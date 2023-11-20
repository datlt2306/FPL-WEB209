import { IProduct } from '@/interfaces/Product'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'
import { SubmitHandler } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useToast } from '../ui/use-toast'

type PriceFormProps = {
    data: IProduct
}

type FormControlType = {
    price: number
}

const PriceForm = ({ data }: PriceFormProps) => {
    const { toast } = useToast()
    const [productEditStatus, setProductEditStatus] = useState(false)
    const { form, onSubmit } = useProductMutation({
        action: 'UPDATE',
        onSuccess: () => {
            setProductEditStatus(false)
            toast({
                variant: 'success',
                title: 'Chúc mừng thanh niên!!',
                description: 'Cập nhật giá thành công'
            })
        }
    })
    useEffect(() => {
        if (data && form) {
            form.reset({
                name: data.name || '',
                price: data.price || 0
            })
        }
    }, [data, form])

    const onHandleSubmit: SubmitHandler<FormControlType> = (values) => {
        onSubmit({ ...data, ...values })
    }
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Gía sản phẩm
                <Button variant='ghost' onClick={() => setProductEditStatus(!productEditStatus)}>
                    {productEditStatus ? (
                        <>Hủy</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Chỉnh sửa
                        </>
                    )}
                </Button>
            </div>
            {!productEditStatus && <p className='text-sm mt-2'>{data?.price}</p>}
            {productEditStatus && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onHandleSubmit)} className='flex flex-col gap-y-8'>
                        <FormField
                            control={form.control}
                            name='price'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder='Nhập giá sản phẩm' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center gap-x-2'>
                            <Button type='submit'>Lưu</Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default PriceForm
