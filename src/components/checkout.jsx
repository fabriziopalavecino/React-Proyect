import { useState } from "react";
import { CartContext } from "../context/CartContext"
import { useContext } from "react";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

function Checkout() {
    const { cart } = useContext(CartContext)

    const handleCreateOrder = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const address = form.address.value 
        const streetNumber = form.streetNumber.value

        createOrder({
            user: { name, phone, email, address, streetNumber },
            items: { cart },
            time: serverTimestamp(),
        })

    }

    return (
        <div className="flex justify-center mt-10">
            <form
                onSubmit={handleCreateOrder}
                className="bg-gray-800 text-white p-8 rounded-lg w-full max-w-120 flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center">
                    Finalizar compra
                </h2>

                <input
                    id="name"
                    name="name"
                    placeholder="Nombre y apellido"
                    className="p-2 rounded text-white border"
                    required
                />

                <input
                    id="phone"
                    name="phone"
                    placeholder="Teléfono"
                    className="p-2 rounded text-white border"
                    required
                />

                <input
                    id="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="p-2 rounded text-white border"
                    required
                />


                <div className="flex gap-2">
                    <input
                        id="address"
                        name="address"
                        placeholder="Calle"
                        className="p-2 rounded text-white border"
                        required
                    />
                    <input
                        id="streetNumber"
                        name="streetNumber"
                        placeholder="Numero de Calle"
                        className="p-2 rounded text-white border"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 py-2 rounded font-semibold"
                >
                    Confirmar compra
                </button>
            </form>
        </div>
    );
}

export default Checkout;