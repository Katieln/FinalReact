import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import { getFirestore, getDoc, doc, collection, getDocs } from "firebase/firestore";

import { products } from "../data/products";
import { ItemList } from "../components/ItemList";

export const ListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

   /*  traer un solo doc o item de firebase
        useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "Items", "UaVSsR0WKwIx4f3xkoMI");
        getDoc(refDoc).then((snapshot) => {
            console.log({ id: snapshot.id, ...snapshot.data()});
        });
    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const refCollection = collection(db, "Items");
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log ("No Results 🥺");
            else
            setItems(
             snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data(), };
             })
             );
        });
    }, []);
    

   /*  useEffect(() => {
        const mypromise = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve(products);
            }, 2000);
        } );

        mypromise.then((response) => {
            if(!id) {
                setItems(response);
            } else{
                const filterByCategory = response.filter(
                (item) => item.category === id );
                setItems(filterByCategory);
            }
        });
    }, [id]); */
/* 
    console.log(items);
 */
    return (
    <Container className="mt-4">
        <h1>{props.greeting}</h1>
        <ItemList items={items}/>
    </Container>
    );
};