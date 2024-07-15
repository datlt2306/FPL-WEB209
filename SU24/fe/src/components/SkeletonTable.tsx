import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTable = () => {
    return (
        <div className="rounded-md border p-4">
            <div className="flex justify-between items-center mb-4">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[100px]" />
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-full" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-full" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Skeleton className="h-4 w-full" />
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {[...Array(5)].map((_, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="h-4 w-full" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonTable;
