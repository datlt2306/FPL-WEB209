import { Skeleton } from "@/components/ui/skeleton"; // Đường dẫn tới component Skeleton của bạn

const SkeletonTable = () => {
    return (
        <div className="rounded-md border">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            <Skeleton className="h-4 w-[100px]" />
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            <Skeleton className="h-4 w-[100px]" />
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            <Skeleton className="h-4 w-[100px]" />
                        </th>
                        {/* Thêm các cột khác nếu cần */}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {[...Array(5)].map((_, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-[100px]" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-[150px]" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-[200px]" />
                            </td>
                            {/* Thêm các cột khác nếu cần */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonTable;
