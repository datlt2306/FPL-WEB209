import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '@/common/Type'
import { Pencil } from 'lucide-react'
import { useEffect, useState } from 'react'

type NameFormProps = {
    data: IProduct
}

const NameForm = ({ data }: NameFormProps) => {
    const { toast } = useToast()
    const [productEditStatus, setProductEditStatus] = useState(false)
    const { form, onSubmit } = useProductMutation({
        action: 'EDIT',
        onSuccess: () => {
            toast({
                description: 'Cập nhật tên sản phẩm thành công',
                variant: 'success'
            })
            setProductEditStatus(false)
        }
    })
    useEffect(() => {
        if (data && form) {
            form.reset({
                name: data?.name,
                price: data?.price
            })
        }
    }, [data, form])
    const handleOnSubmit = (values: IProduct) => {
        onSubmit({ ...data, ...values })
    }
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Tên sản phẩm
                {productEditStatus ? (
                    <Button variant='ghost' onClick={() => setProductEditStatus(!productEditStatus)}>
                        <>Hủy</>
                    </Button>
                ) : (
                    <Button variant='ghost' onClick={() => setProductEditStatus(!productEditStatus)}>
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Chỉnh sửa
                        </>
                    </Button>
                )}
            </div>
            {!productEditStatus && <p className='text-sm mt-2'>{data?.name}</p>}
            {productEditStatus && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                        <FormField
                            name='name'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder='Tên sản phẩm' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='mt-3'>
                            Lưu
                        </Button>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default NameForm
