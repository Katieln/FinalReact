import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {

    const {items} = useContext(CartContext);

    if (!!items.length){
        return <div> Carrito Vacio </div>;
    }

    return 
    <Container className="mt-4">
        <div>
        <h1> Productos seleccionados en el carrito para comprar </h1>
        {items.map(item)}
        </div>
    </Container>;
};
