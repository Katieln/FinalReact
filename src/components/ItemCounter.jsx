import { useState } from "react"

export const ItemCounter = ({onAdd, stock, initial }) => {

    const [ count, setCount ] = useState(initial)

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrease = () => {
        setCount(prev => prev - 1)
    }

    return (
        <>
    <button onClick={handleDecrease}>-</button>
    <input value= {count} />
    <button onClick={handleIncrease}>+</button>
    <br/>
    <br/>
    <button onClick={onAdd}> Agregar al carrito Cuantas personas </button>
    </>)
}