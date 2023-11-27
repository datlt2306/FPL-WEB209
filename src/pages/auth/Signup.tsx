import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import useAuthMutation from '@/hooks/useAuthMutation'

const Signup = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_UP',
        onSuccess: () => {
            toast({
                description: 'Đăng ký thành công',
                variant: 'success'
            })
            form.reset()
        }
    })
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Email của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Mật khẩu của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant='destructive' type='submit'>
                        Đăng ký
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default Signup
