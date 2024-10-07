import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/carts", (req, res) => {
    const db = router.db; // Lấy database từ router
    const carts = db.get("carts").value(); // Lấy dữ liệu giỏ hàng
    const products = db.get("products").value(); // Lấy dữ liệu sản phẩm

    const cartsWithProducts = carts.map((cart) => {
        const productsInCart = cart.products.map((cartProduct) => {
            const product = products.find((p) => p.id === cartProduct.productId);
            return {
                ...cartProduct,
                product, // Nhúng toàn bộ thông tin sản phẩm vào
            };
        });
        return {
            ...cart,
            products: productsInCart,
        };
    });
    res.json(cartsWithProducts);
});

server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});

/**
 * B1: Sử dụng contextAPI để làm việc với giỏ hàng
 * B2: Sử dụng usQuery để get dữ liệu giỏ hàng về
 * B3: Lưu
 */
