import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import lentes from '../products.json'

function ItemListContainer() {
    const {id}= useParams();
    const [lentes, setLentes]= useState([]);
    const [loading,setLoading]= useState(true);
    const [error, setError] = useState(false);

        useEffect(()=> {
         
        const watch = new Promise((res) => {
           setTimeout(()=>{
           (!id) ? res (lentes) : (lentes.filter(item=> item.id === id));
           console.log (lentes)
           },1500); 
        });
        watch
        .then((res)=> {
            setLentes(res);
        })
        .catch((error) => { setError(true); console.log (error);})
        .finally(()=>{setLoading(false);})
        
    },[id]);
    
    return (
        <>
        
        <div>{loading && 'loading...'}</div>
        <div>{error && 'Error encontrado'}</div>
        <ItemList lentes={lentes}/>
        
    
        </>
    )
}

export default ItemListContainer
