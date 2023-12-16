import { Link } from "react-router-dom";
import cart from "../assets/cart.jpg"

export const CartWidget = () => {
    return (
    <Link to="/Cart">
    <img src={cart} alt="carrito" height={50}/>
    <span style={{ margin: '7px' }}>5</span>
    </Link>);
};