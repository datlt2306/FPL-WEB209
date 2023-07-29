import { useAppDispatch, useAppSelector } from "@/app/hook";
import { Button } from "..";
import ProductList from "../ProductList";
import { decrease, increase } from "@/slices/Cart";

const Cart = () => {
    const products = useAppSelector((state: any) => state.cart.items);
    const dispatch = useAppDispatch();
    return (
        <div>
            <ProductList />
            <hr className="my-3" />
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name} - {item.price} - {item.quantity} - Tổng:
                        {item.price * item.quantity}
                        <Button
                            type="primary"
                            className="mx-2"
                            onClick={() => dispatch(increase(item.id))}
                        >
                            Increase
                        </Button>
                        <Button type="primary" onClick={() => dispatch(decrease(item.id))}>
                            Decrement
                        </Button>
                    </div>
                );
            })}
            Total ={" "}
            {products?.reduce((total: any, item: any) => total + item.price * item.quantity, 0)}
        </div>
    );
};

export default Cart;
