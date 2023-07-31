import { decrease, increase } from "@/slices/Cart";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Button } from "..";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state: any) => state.cart);
    return (
        <div>
            {items?.map((item: any) => (
                <div key={item.id}>
                    {item.name} - {item.price} - {item?.quantity} - Total:{" "}
                    {item?.price * item?.quantity}
                    <Button type="primary" onClick={() => dispatch(increase(item.id))}>
                        Increase
                    </Button>
                    <Button type="primary" onClick={() => dispatch(decrease(item.id))}>
                        Decrease
                    </Button>
                </div>
            ))}
            Total:
            {items.reduce(function (sum: any, item: any) {
                return sum + item.price * item.quantity;
            }, 0)}
        </div>
    );
};

export default Cart;
