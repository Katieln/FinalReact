import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import { products } from "../data/products";


export const DetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();
    

    useEffect(() => {
        const mypromise = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve(products);
            }, 1000);
        } );

        mypromise.then((response) => {
     
                const findById = response.find(
                (item) => item.id === Number(id) );
                setItem(findById);
            
        });
    }, [id]);



    return 
    <Container className="mt-4">
   {JSON.stringify(item)}
    </Container>
    ;
};