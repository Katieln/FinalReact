import { Button} from "react-bootstrap"
import { useState } from "react"

export const ItemCounter = ({onAdd, stock, initial }) => {

    const [ count, setCount ] = useState(initial)

    const handleIncrease = () => {
        if(stock > count){
        setCount(prev => prev + 1)}
    }

    const handleDecrease = () => {
        if(count > 1) {setCount(prev => prev - 1)}
    }

    return (
        <>
    <Button onClick={handleDecrease}>-</Button>
    <input value= {count} />
    <Button onClick={handleIncrease}>+</Button>
    <br/>
    <br/>
    <Button onClick= {() => onAdd (count)}> Agregar al carrito!! 😎 </Button>
    </>)
}