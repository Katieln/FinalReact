import { Link } from "react-router-dom";
import cart from "../assets/cart.jpg"
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const CartWidget = () => {

    const {items } = useContext(CartContext)

    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.cantidad , 0)

    return (
    <Link to="/Cart">
    <img src={cart} alt="carrito" height={50}/>
    <span style={{ margin: '7px' }}>{total}</span>
    </Link>);
};