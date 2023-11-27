import { useProductMutation } from '@/hooks/useProductMutation'
import { Button } from '../../../components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { useToast } from '../../../components/ui/use-toast'

const Add = () => {
    const { toast } = useToast()
    const { form, onSubmit, isLoading } = useProductMutation({
        action: 'ADD',
        onSuccess: () => {
            toast({
                title: 'Success',
                description: 'Product has been added',
                duration: 3000,
                variant: 'success'
            })
            form.reset()
        }
    })
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 p-10'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Tên sản phẩm</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Tên sản phẩm' />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Giá sản phẩm</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Giá sản phẩm' />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    {isLoading ? 'Loading...' : <Button type='submit'>Thêm</Button>}
                </form>
            </Form>
        </div>
    )
}

export default Add
