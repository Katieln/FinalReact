import { createContext, useState } from "react";

export const CartContext = createContext() ;


export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const clear = () => setItems([])

    return (
        <CartContext.Provider value = {{ items, clear }}>
            {children}
        </CartContext.Provider>
    );
};