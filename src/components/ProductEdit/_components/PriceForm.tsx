import { editProduct } from '@/api/product'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

type PriceFormProps = {
    data: IProduct
}
type FormControlType = {
    price: number
}

const formSchema = Joi.object({
    price: Joi.number().required()
})

const PriceForm = ({ data }: PriceFormProps) => {
    const queryClient = useQueryClient()
    const [toggle, setToggle] = useState(false)
    const form = useForm<FormControlType>({
        resolver: joiResolver(formSchema),
        defaultValues: {
            price: data?.price || 0
        }
    })
    const { mutate } = useMutation({
        mutationFn: (values: { price: number }) => editProduct({ ...data, ...values }),
        onSuccess: () => {
            setToggle(false)
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT_KEY']
            })
        }
    })
    const onSubmit: SubmitHandler<FormControlType> = (values) => {
        mutate(values)
    }
    return (
        <div className='border border-gray-200 shadow p-5'>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-bold'>Tên sản phẩm</h2>
                <button onClick={() => setToggle(!toggle)}>Chỉnh sửa</button>
            </div>
            {toggle ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=''>
                        <FormField
                            control={form.control}
                            name='price'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Giá' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='mt-2'>
                            Lưu
                        </Button>
                    </form>
                </Form>
            ) : (
                <p className='my-2'>{data?.price}</p>
            )}
        </div>
    )
}

export default PriceForm
