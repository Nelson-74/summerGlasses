import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import lentes from '../products.json'

function ItemDetailContainer () {
    const [lentes, setLentes] = useState({});
    const {id}= useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    console.log(id)

    useEffect(() =>{
        setLentes({});
        setLoading(true);
        setError(false);
        const fetching = new Promise((res) => {
            setTimeout(()=>{
            res(lentes.find(item=> item.id === id));
            },1500); 
         });
         fetching
         .then((res) =>setLentes(res))
         .then(setLoading(true))
         .catch((error) => { setError(true); console.log (error);})
         .finally(()=>{setLoading(false);}); 
    },[id]);

    console.log(lentes)

    return (
        <>
        
            <div className='loading'> {loading &&'Loading...'}</div>
            <div>{error && 'Load error '}</div>
            <ItemDetail lentes={lentes}/>
        
        </>
    )
};

export default ItemDetailContainer
