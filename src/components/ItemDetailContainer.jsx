import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import gafas from '../products.json'

function ItemDetailContainer () {
    const [productos, setProductos] = useState([]);
    const {id}= useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    console.log(id)

    useEffect(() =>{
        setProductos({});
        setLoading(true);
        setError(false);
        const fetching = new Promise((res) => {
            setTimeout(()=>{
            res(gafas.find(item => item.id === id));
            },1500); 
         });
         fetching
         .then((res) =>setProductos(res))
         .then(setLoading(true))
         .catch((error) => { setError(true); console.log (error);})
         .finally(()=>{setLoading(false);}); 

    
    },[id]);

    console.log(productos)

    return (
        <>
        
            <div className='loading'> {loading &&'Loading...'}</div>
            <div>{error && 'Load error '}</div>
            <ItemDetail productos = {productos}/>
            {/* <div>{gafas &&<div>{JSON.stringify(gafas)}</div>}</div>  */}
        </>
    )
};

export default ItemDetailContainer
