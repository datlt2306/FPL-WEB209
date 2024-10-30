export const getProducts = async () => {
    // Kịch bản giả lập việc lấy dữ liệu từ server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Kịch bản giả lập việc lấy dữ liệu từ server về bị lỗi
    throw new Error("Failed to fetch products");
    const response = await fetch(`http://localhost:3001/products`);
    const data = await response.json();
    return data;
};
