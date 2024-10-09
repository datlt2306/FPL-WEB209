import jsonServer from "json-server";
import auth from "json-server-auth";
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
server.db = router.db;
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(auth);
// Get cart by userId
server.get("/carts/:userId", (req, res) => {
    const db = router.db; // Lấy database từ router
    const carts = db.get("carts").value(); // Lấy dữ liệu giỏ hàng
    const products = db.get("products").value(); // Lấy dữ liệu sản phẩm

    const userId = +req.params.userId; // Lấy userId từ params

    // Lọc giỏ hàng dựa vào userId
    const userCarts = carts.filter((cart) => cart.userId === userId);

    if (userCarts.length === 0) {
        return res.status(404).json({ message: "Cart not found" });
    }

    const cartWithProducts = userCarts.map((cart) => {
        const productsInCart = cart.products.map((cartProduct) => {
            const product = products.find((p) => p.id === cartProduct.productId);
            return {
                ...cartProduct,
                product: product, // Nhúng toàn bộ thông tin sản phẩm vào
            };
        });

        return {
            ...cart,
            products: productsInCart,
        };
    });

    res.json(cartWithProducts[0]); // Trả về giỏ hàng đầu tiên của user
});

// Add item to cart
server.post("/carts/:userId", (req, res) => {
    const db = router.db;
    const userId = +req.params.userId;
    const { productId, quantity } = req.body;
    let cart = db.get("carts").find({ userId }).value();
    if (!cart) {
        cart = { userId, products: [] };
        db.get("carts").push(cart).write();
    }
    const productInCart = cart.products.find((p) => p.productId === productId);

    if (productInCart) {
        productInCart.quantity += quantity;
    } else {
        cart.products.push({ productId, quantity });
    }

    // Update the cart in the database
    db.get("carts").find({ userId }).assign(cart).write();
    res.status(200).json(cart);
});
// Update item quantity in cart
server.put("/carts/:userId/:productId", (req, res) => {
    const db = router.db;
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    const cart = db.get("carts").find({ userId: +userId }).value();
    if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
    }

    const productInCart = cart.products.find((p) => p.productId === +productId);

    if (productInCart) {
        productInCart.quantity = quantity;
    } else {
        return res.status(404).json({ message: "Product not found in cart" });
    }

    db.get("carts")
        .find({ userId: parseInt(userId) })
        .assign(cart)
        .write();
    res.status(200).json(cart);
});

// Remove item from cart
server.delete("/carts/:userId/:productId", (req, res) => {
    const db = router.db;
    const userId = req.params.userId;
    const productId = parseInt(req.params.productId);

    const cart = db.get("carts").find({ userId }).value();
    if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = cart.products.filter((p) => p.productId !== productId);

    db.get("carts").find({ userId }).assign(cart).write();
    res.status(200).json(cart);
});

server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
