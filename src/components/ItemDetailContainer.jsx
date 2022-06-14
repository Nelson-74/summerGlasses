import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
    const [item, setitem] = useState({})
    

    useEffect(() =>{
        const getDetail = () =>{
            fetch('../products.json')
            .then(res=>res.json())
            .then((data)=> setitem(data.find(prod => prod.id === 3)))
            .catch(error => console.error('Error', error))
    };
    setTimeout (()=>{
        getDetail();
    },2000);
    },[])
    console.log(item)

    return (
        <>
        <div>
            <ItemDetail item={item}/>
        </div>
        </>
    )
}

export default ItemDetailContainer
