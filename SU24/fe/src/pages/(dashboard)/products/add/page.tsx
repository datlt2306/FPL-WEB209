import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ProductJoiSchema } from "@/common/validations/product";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import instance from "@/configs/axios";
import { Loader2Icon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ProductAddPage = () => {
    const form = useForm({
        resolver: joiResolver(ProductJoiSchema),
        defaultValues: {
            name: "",
            price: 0,
        },
    });

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (formData) => instance.post("/products", formData),
        onSuccess: () => {
            form.reset();
            toast({
                variant: "success",
                title: "Thêm sản phẩm thành công",
            });
        },
    });

    const onSubmit = (data: any) => {
        mutate(data);
    };
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên sản phẩm</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Sản phẩm A"
                                        {...field}
                                        disabled={isPending ? true : false}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giá sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder="Sản phẩm A" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">{isPending ? <Loader2Icon /> : "Submit"}</Button>
                </form>
            </Form>
        </div>
    );
};

export default ProductAddPage;
