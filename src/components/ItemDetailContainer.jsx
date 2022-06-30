import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../asyncMock';


function ItemDetailContainer () {
    const [product, setProduct] = useState([]);
    
    const {productId} = useParams()

    useEffect(() =>{
       getProductById(productId)
        . then(response =>{
         setProduct(response)
       })

    
    },[productId]);

    

    return (
        <>
        
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
            {/* <div>{gafas &&<div>{JSON.stringify(gafas)}</div>}</div>  */}
        </>
    )
};

export default ItemDetailContainer
