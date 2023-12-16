import { createContext, useState } from "react";

export const CartContext = createContext() ;


export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

   

    const onAdd = (item, cantidad) => {
       
        const exist = items.some ( i => i.id === item.id);
      
        if (exist) {
            const updateItems = items.map(i => {
                if (i.id === item.id) {
                    const newQuantity = i.cantidad + cantidad;
                    if (newQuantity <= item.stock) {
                        return {
                            ...i,
                            cantidad: newQuantity,
                        };
                    } else {
                        // Mostrar alerta o realizar alguna acción
                        alert("No se puede agregar más cantidad que el valor del stock");
                        return i;
                    }
                } else {
                    return i;
                }
            });
            setItems(updateItems);
        } else {
            if (cantidad <= item.stock) {
                setItems(prev => [...prev, { ...item, cantidad }]);
            } else {
                // Mostrar alerta o realizar alguna acción
                alert("No se puede agregar más cantidad que el valor del stock");
            }
        }
    };


  

    const onRemove = (id) => {
        const filterItems = items.filter(item => item.id !== id);
        setItems(filterItems);
    };

    console.log(items)
    return (
        <CartContext.Provider value = {{ items, clear, onAdd, onRemove}}>
            {children}
        </CartContext.Provider>
    );
};

