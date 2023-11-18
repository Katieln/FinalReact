import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import { products } from "../data/products";
import { ItemList } from "../components/ItemList";

export const ListContainer = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const mypromise = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve(products);
            }, 2000);
        } );
        mypromise.then((response) => setItems(response));
    }, []);

    console.log(items);

    return (
    <Container className="mt-4">
        <h1>{props.greeting}</h1>
        <ItemList items={items}/>
    </Container>
    );
};