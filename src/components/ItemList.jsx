import { Item } from "./Item";

export const ItemList = ({items}) => {
    return (
    <div className="d-flex" style={{display: "flex", flexWrap: "wrap"}}> 
    {items.map((item) => 
    <Item key={item.id} item={item} />)}
    </div>
    );
};