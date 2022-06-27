/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import gafas from '../products.json';

function ItemListContainer() {
    const {id}= useParams;
    const [productos, setProductos]= useState([]);
    const [loading,setLoading]= useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
       setProductos({});
       setLoading(true);
       setError(error); 
        
    const watch = new Promise((res) => {
        setTimeout(()=>{
        (!id) ? res (gafas) : res(gafas.filter(item => item.category === id))
        console.log(productos)
        console.log(gafas)
        console.log(gafas.filter(item => item.category === id))
        },1500); 
        });
        watch
        .then((res)=> {
            setProductos(res);
        })
        .catch((error) => { setError(true); console.log (error);
        })
        .finally(()=> {setLoading(false);});
        
    },[id]);
    
    return (
        <>
        
        <div>{loading && 'loading...'}</div>
        <div>{error && 'Error encontrado'}</div>
        <ItemList gafas={gafas}/>
        {/* { <div>{productos &&<div>{JSON.stringify(productos)}</div>}</div>} */}
    
        </>
    )
}

export default ItemListContainer
