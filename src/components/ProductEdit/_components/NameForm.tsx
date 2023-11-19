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
import { useToast } from '@/components/ui/use-toast'
import { Pencil } from 'lucide-react'

type NameFormProps = {
    data: IProduct
}
type FormControlType = {
    name: string
}

const formSchema = Joi.object({
    name: Joi.string().required()
})

const NameForm = ({ data }: NameFormProps) => {
    const { toast } = useToast()
    const queryClient = useQueryClient()
    const [toggle, setToggle] = useState(false)
    const form = useForm<FormControlType>({
        resolver: joiResolver(formSchema),
        defaultValues: {
            name: data?.name || ''
        }
    })
    const { mutate } = useMutation({
        mutationFn: (values: { name: string }) => editProduct({ ...data, ...values }),
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Thành công',
                description: 'Cập nhật thành công'
            })
            // thêm | cập nhật thành công
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
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                <h2 className='font-bold'>Tên sản phẩm</h2>
                <Button variant='ghost' onClick={() => setToggle(!toggle)}>
                    {toggle ? (
                        <>Hủy</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Chỉnh sửa
                        </>
                    )}
                </Button>
            </div>
            {!toggle && <p className='my-2'>{data?.name}</p>}
            {toggle && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=''>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='shadcn' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='mt-2'>
                            Lưu
                        </Button>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default NameForm
