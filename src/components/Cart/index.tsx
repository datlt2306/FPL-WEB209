import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Button } from "..";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);
    return (
        <div>
            {items?.map((item) => (
                <div key={item.id}>
                    {item.name}
                    <Button
                        type="primary"
                        onClick={() => dispatch({ type: "cart/increment", payload: item.id })}
                        icon={<AiOutlinePlus />}
                    />
                    <Button
                        type="danger"
                        onClick={() => dispatch({ type: "cart/decrement", payload: item.id })}
                        icon={<AiOutlineMinus />}
                    />
                </div>
            ))}
            total: {items?.reduce((total, item) => total + item.price * item.quantity, 0)}
        </div>
    );
};

export default Cart;
