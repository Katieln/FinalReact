export const ItemCounter = ({onAdd}) => {
    return (
        <>
    <button>-</button>
    <input/>
    <button>+</button>
    <br/>
    <br/>
    <button onClick={onAdd}> Agregar al carrito Cuantas personas </button>
    </>)
}