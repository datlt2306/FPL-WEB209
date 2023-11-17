import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '../interfaces/Product'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'

const Add = () => {
    const { form, onSubmit, isLoading } = useProductMutation({
        action: 'ADD'
    })
    const handleOnSubmit = (values: IProduct) => {
        onSubmit(values)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-4 p-10'>
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
