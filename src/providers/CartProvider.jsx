import { CartContext } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        const productInCart = cart.find((prod) => prod.id === product.id);

        if (productInCart) {
            setCart(
                cart.map((prod) =>
                    prod.id === product.id
                        ? { ...prod, count: prod.count + quantity }
                        : prod
                )
            );
        } else {
            setCart([...cart, { ...product, count: quantity }]);
        }
    };

    const getProductsQuantity = () => cart.reduce((acc, product) => acc + product.count, 0)

    const increaseQuantity = (id) => {
        setCart(
            cart.map((prod) =>
                prod.id === id
                    ? { ...prod, count: prod.count + 1 }
                    : prod
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(
            cart
                .map((prod) =>
                    prod.id === id
                        ? { ...prod, count: prod.count - 1 }
                        : prod
                )
                .filter((prod) => prod.count > 0)
        );
    };

    const removeProduct = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const clearCart = () => setCart([])




    return (
        <CartContext.Provider value={{ cart, getProductsQuantity, addToCart, increaseQuantity, decreaseQuantity, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartProvider;