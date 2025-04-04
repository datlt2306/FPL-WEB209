import { useList } from "@refinedev/core";
import React from "react";

const ProductListPage = () => {
    const { data, isLoading } = useList({
        resource: "products",
        queryOptions: {
            // Cấu hình cache
            cacheTime: 5 * 60 * 1000, // Thời gian cache: 5 phút (mặc định là 5 phút)
            staleTime: 30 * 1000, // Thời gian dữ liệu được coi là "fresh": 30 giây (mặc định là 0)
            keepPreviousData: true, // Giữ dữ liệu cũ khi tải dữ liệu mới
            refetchOnWindowFocus: false, // Không tự động refetch khi focus lại cửa sổ
        },
    });

    if (isLoading) return <div>Loading...</div>;
    console.log(data?.data);
    return (
        <div>
            {data?.map((item) => (
                <h2>{item.name}</h2>
            ))}
        </div>
    );
};

export default ProductListPage;
