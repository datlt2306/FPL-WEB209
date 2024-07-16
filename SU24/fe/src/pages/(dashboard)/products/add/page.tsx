import { ProductJoiSchema } from "@/common/validations/product";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import instance from "@/configs/axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";

const ProductAddPage = () => {
    const form = useForm({
        resolver: joiResolver(ProductJoiSchema),
        defaultValues: {
            name: "",
            price: 0,
            category: "",
        },
    });

    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get("/categories"),
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
        <div className="container mx-auto">
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
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Chọn danh mục" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {data &&
                                            data?.data.map((category: any, index: number) => (
                                                <SelectItem key={index} value={category._id}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
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
