import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
    const navigate = useNavigate();
    const { getProductsQuantity } = useContext(CartContext);

    return (
        <button
            className="relative bg-blue-700 px-3 py-1 rounded-lg"
            onClick={() => navigate("/cart")}
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                alt="Cart"
                className="w-5 h-5"
            />

            {getProductsQuantity() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {getProductsQuantity()}
                </span>
            )}
        </button>
    );
}

export default CartWidget;