import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Button } from "..";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { decrease, increase } from "@/slices/cart";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);
    return (
        <div>
            {items?.map((item) => (
                <div key={item.id}>
                    {item.name} - {item.price} - {item.quantity} - Total:{" "}
                    {item.price * item.quantity}
                    <Button
                        type="primary"
                        onClick={() => dispatch(increase(item.id))}
                        icon={<AiOutlinePlus />}
                    />
                    <Button
                        type="danger"
                        onClick={() => dispatch(decrease(item.id))}
                        icon={<AiOutlineMinus />}
                    />
                </div>
            ))}
            total: {items?.reduce((total, item) => total + item.price * item.quantity, 0)}
        </div>
    );
};

export default Cart;
