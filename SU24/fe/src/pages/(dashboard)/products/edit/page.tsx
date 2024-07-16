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
import { useParams } from "react-router-dom";

const ProductEditPage = () => {
    const { id } = useParams();
    const form = useForm({
        resolver: joiResolver(ProductJoiSchema),
        defaultValues: {
            name: "",
            price: 0,
            category: "",
        },
    });

    const { data: categoriesData } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get("/categories"),
    });

    const { isLoading: isProductLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await instance.get(`/products/${id}`);
            form.reset({
                name: response?.data.name,
                price: response?.data.price,
                category: response?.data.category,
            });
            return response;
        },
    });

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (formData) => instance.put(`/products/${id}`, formData),
        onSuccess: () => {
            toast({
                variant: "success",
                title: "Cập nhật sản phẩm thành công",
            });
        },
    });

    const onSubmit = (formData: any) => {
        mutate(formData);
    };

    if (isProductLoading) return <div>Loading...</div>;
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
                                        disabled={isPending}
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
                                    <Input
                                        placeholder="100000"
                                        type="number"
                                        {...field}
                                        disabled={isPending}
                                    />
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
                                <FormLabel>Danh mục</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={isPending}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Chọn danh mục" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categoriesData &&
                                            categoriesData.data.map(
                                                (category: any, index: number) => (
                                                    <SelectItem key={index} value={category._id}>
                                                        {category.name}
                                                    </SelectItem>
                                                )
                                            )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isPending}>
                        {isPending ? <Loader2Icon className="animate-spin" /> : "Cập nhật"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ProductEditPage;
