import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer ({onAdd,addCartWidget}) {
    const [item, setitem] = useState({})
    const {id}= useParams

    useEffect(() =>{
        const getDetail = () =>{
            fetch('../products.json')
            .then(res=>res.json())
            .then((data)=> setitem(data.find(prod => prod.id === id)))
            .catch(error => console.error('Error', error))
    };
    setTimeout (()=>{
        getDetail();
    },2000);
    },[id])
    console.log(item)

    return (
        <>
        <div className='d-flex justify-content-center align-items-center'>
            <ItemDetail 
            id={item.id}
            onAdd={onAdd} 
            cantidad={addCartWidget}/>
        </div>
        </>
    )
}

export default ItemDetailContainer
