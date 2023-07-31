import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { decrease, increase } from "@/slices/Cart";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state: any) => state.cart);
    return (
        <div>
            {items?.map((item: any) => (
                <div key={item.id}>
                    {item.name} - {item.price} - {item.quantity} - Total:{" "}
                    {item.price * item.quantity}
                    <Button
                        type="primary"
                        onClick={() => dispatch(increase(item.id))}
                        icon={<AiOutlinePlus />}
                    />
                    <Button
                        type="primary"
                        onClick={() => dispatch(decrease(item.id))}
                        icon={<AiOutlineLine />}
                    />
                </div>
            ))}
            Total:
            {items.reduce((sum: any, item: any) => {
                return sum + item.price * item.quantity;
            }, 0)}
        </div>
    );
};

export default Cart;
