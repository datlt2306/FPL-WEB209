import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useProductMutation } from '@/hooks/useProductMutation'
import { AiFillPlusSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../ui/use-toast'

const ProductAdd = () => {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onSubmit } = useProductMutation({
        action: 'CREATE',
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Chúc mừng bạn!',
                description: 'Bạn đã thêm sản phẩm thành công'
            })
            form.reset()
            setTimeout(() => {
                navigate('/product')
            }, 2000)
        }
    })
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='Tên sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='price'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Giá</FormLabel>
                            <FormControl>
                                <Input type='number' placeholder='Giá sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit' variant='destructive'>
                    <AiFillPlusSquare />
                    Thêm sản phẩm
                </Button>
            </form>
        </Form>
    )
}

export default ProductAdd
