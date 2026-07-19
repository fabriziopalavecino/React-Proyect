import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import toast from "react-hot-toast";

function Counter({ item }) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        console.log(`Cantidad seleccionada: ${count}`);
    }, [count]);

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);

        }
    };

    const handleAddToCart = () => {
        addToCart(item, count);
        toast.success("Producto agregado al carrito")

    }

    return (
        <div className="flex flex-col gap-4 mt-4">

            <div className="flex items-center gap-4">

                <button
                    onClick={restar}
                    className={`bg-red-600 text-white px-4 py-2 rounded ${count === 0 ? "opacity-50 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
                >
                    -
                </button>

                <span className="text-xl font-bold">
                    {count}
                </span>

                <button
                    onClick={sumar}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    +
                </button>

            </div>

            <button
                onClick={handleAddToCart}
                disabled={count === 0}
                className={`px-4 py-2 rounded text-white ${count === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-700 hover:bg-blue-800"
                    }`}
            >
                Agregar al carrito
            </button>

        </div>
    );
}

export default Counter;