import { Button} from "react-bootstrap"
import { useState } from "react"

export const ItemCounter = ({onAdd, stock, initial, cantidad }) => {

    const [ count, setCount ] = useState(initial)

    const handleIncrease = () => {
        if(stock > count){
        setCount(prev => prev + 1)}
    }

    const handleDecrease = () => {
        if(count > 1) {setCount(prev => prev - 1)}
    }

    const handleAdd =() => {
    {
        onAdd (count);
        setCount(initial);}
    }

    return (
        <>
    <Button onClick={handleDecrease}>-</Button>
    <input type="text" value={count} readOnly />
    <Button onClick={handleIncrease}>+</Button>
    <br/>
    <br/>
    <Button onClick= {handleAdd}> ❤️ Agregar al carrito!! ✈️🚢</Button>
    </>)
}