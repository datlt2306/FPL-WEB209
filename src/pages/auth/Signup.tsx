import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuthMutation } from '@/hooks/useAuthMutation'

const SignupPage = () => {
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
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Email của bạn' />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Password của bạn' />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit' variant='destructive'>
                        Đăng ký
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignupPage
