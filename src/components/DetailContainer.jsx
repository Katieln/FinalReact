import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { getFirestore, getDoc, doc} from "firebase/firestore";

import {DetailsItem} from "./DetailsItem";



export const DetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "Items", id);
    
        getDoc(refDoc).then((snapshot) => {
           setItem ({ id: snapshot.id , ...snapshot.data ()});
             });
    }, [id]);
    
    
/* 
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
                console.log(findById)   ;    
        });
    }, [id]); */

    return (
    <Container className="mt-4" >
        {item ? <DetailsItem item={item}/> : <>Loading..</>}
       
    </Container>
    );
};