import React, { useState } from 'react'
//import { getProducts } from '../asyncMock'


function ItemCount({initial=1, onAdd}) {
       
    const [enableAdd, setEnableAdd] = useState(true);
    const [count, setCount] = useState(initial)
    const [quantity, setQuantity] = useState(0);

   
    const add =() =>{
        count < quantity ? setCount(count+1) : setEnableAdd (false);      
    }
    const subtract =() =>{
        count > initial ? setCount(count-1) : setEnableAdd(true);
    }
    const reset =()=> {
       setCount(initial)
    } 
    const qtyNow = () => {
        if (quantity - count >= 0) {setQuantity(quantity - count);} else {
            alert("No hay stock suficiente");
          }
      };    
       
        qtyNow();
        

    return (  
        <div className='bg-light p-2 text-dark bg-opacity-75 d-flex justify-content-center row col-md-2 col-mx-auto shadow position-absolute top-50 start-50 translate-middle'>
                       
            <h3 className='d-flex justify-content-center row'>{count}</h3>
            <button className='btn btn-outline-info col-md-6' onClick={add} disabled={!enableAdd}><strong>+</strong></button>
            <button className='btn btn-outline-info col-md-6' onClick={subtract}><strong>-</strong></button>
            <button className='btn btn-outline-warning' onClick={()=> {onAdd(count); reset()}}><strong>Agregar tu compra</strong></button>
            <button className ='btn btn-outline-danger' onClick={reset}><strong>Reset</strong> </button>
        </div> 
    )
}

export default ItemCount
