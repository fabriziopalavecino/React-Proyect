import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { FiPlusSquare } from "react-icons/fi";
import { FiXSquare, FiMinusSquare, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout.jsx"


function CartContainer() {
    const navigate = useNavigate();
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct
    } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col rounded-box shadow-md m-4 border border-gray-300 p-4 gap-10">
                <h2>Tu carrito está vacio</h2>
                <button className="flex justify-center border max-w-120 rounded bg-red"
                onClick={() => navigate("/")}>
                    Ver productos
                </button>
            </div>
        )
    }

    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md m-4 border border-gray-300 p-4">

                <li className="pb-5 text-xs opacity-60 tracking-wide">Productos en el carrito:</li>

                {cart.map(prod => (
                    <li className="list-row pb-4 bg-gray-100 rounded-lg border border-gray-300 p-2 flex items-center gap-4 m-3" key={prod.id}>
                        <div><img className="size-10 rounded-box" src={prod.image} /></div>
                        <div>
                            <div>{prod.name}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Cantidad:{prod.count}</div>
                        </div>
                        <div className="ml-auto flex gap-2">
                            <button className="btn btn-square btn-ghost"
                                onClick={() => increaseQuantity(prod.id)}>
                                <FiPlusSquare size={24} />
                            </button>

                            <button className="btn btn-square btn-ghost"
                                onClick={() => decreaseQuantity(prod.id)}>
                                <FiMinusSquare size={24} />
                            </button>

                            <button className="btn btn-square btn-ghost"
                                onClick={() => removeProduct(prod.id)}>
                                <FiTrash2 size={24} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center bg-gray-100 rounded-lg border border-gray-300 p-4 m-4">
                <button className="btn btn-primary"
                    onClick={() => navigate('/Checkout')}
                >
                    Ir a pagar
                </button>
            </div>
        </div>
    )
}

export default CartContainer