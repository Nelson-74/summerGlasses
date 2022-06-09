import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
    const [lentes, setLentes]= useState([])
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        fetch('../products.json')
        .then(res=>res.json())
        .catch(error => console.error('Error', error))
        .then(res => setLentes(res))
        .finally(()=>setLoading(false))
    },[])
     console.log(lentes)

    return (
        <>
        <div className ='text-center'>
            {loading ?
            <h2>loading...</h2>   
             :
           <ItemList lentes={lentes}/>
          }
        </div>
        </>
    )
}

export default ItemListContainer
