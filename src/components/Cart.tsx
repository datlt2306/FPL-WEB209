import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { decrease, increase } from "@/slices/Cart";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state: any) => state.cart);
    return (
        <div>
            {items?.map((item: any) => (
                <div key={item.id}>
                    {item?.name} - {item?.quantity} - {item.price * item.quantity}
                    <button
                        className="bg-blue-500 text-white p-2 mx-3"
                        onClick={() => dispatch(increase(item.id))}
                    >
                        increase
                    </button>
                    <button
                        className="bg-red-500 text-white p-2 mx-3"
                        onClick={() => dispatch(decrease(item.id))}
                    >
                        decrease
                    </button>
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
