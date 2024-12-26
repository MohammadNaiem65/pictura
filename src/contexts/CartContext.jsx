import { useState, useEffect, createContext } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));

        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
