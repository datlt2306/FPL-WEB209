import Product from "./models/product.js"; // Đảm bảo rằng đường dẫn đến model Product của bạn đúng

const addTenProducts = async () => {
    for (let i = 0; i < 10; i++) {
        const product = new Product({
            name: `Product ${i}`,
            slug: `product-${i}`,
            category: "60d6c47e0b5f5c6d88d53b1a", // Thay thế bằng ID danh mục thực tế
            price: 100,
            image: `http://example.com/product${i}.jpg`,
            gallery: [
                `http://example.com/product${i}-1.jpg`,
                `http://example.com/product${i}-2.jpg`,
            ],
            description: `This is product ${i}`,
            discount: 10,
            countInStock: 10,
            featured: false,
            tags: ["tag1", "tag2"],
        });

        await product.save();
    }
};

addTenProducts()
    .then(() => console.log("10 products added"))
    .catch((err) => console.error(err));
