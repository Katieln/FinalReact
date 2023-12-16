import { createContext, useState } from "react";

export const CartContext = createContext() ;


export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onAdd = (item, cantidad) => {
        console.log(cantidad)
        const exist = items.some ( i => i.id === item.id);
        console.log(exist);
        if (exist){
            const updateItems = items.map (i => {
                if(i.id === item.id){
                    return {
                        ...i,
                        cantidad: i.cantidad = cantidad
                    };
                }
                else {
                    return i;
                }
            });
            setItems (updateItems);
        }
        else {
            setItems((prev) => {
                return [...prev, {...item, cantidad}];
            });
        }
    }

    
    const onRemove = (id) => {
        const filterItems = items.filter(item => item.id !== id);
        setItems(filterItems);
    };
       /* 
 */
    return (
        <CartContext.Provider value = {{ items, clear, onAdd, onRemove }}>
            {children}
        </CartContext.Provider>
    );
};