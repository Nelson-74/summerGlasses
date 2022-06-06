import React, { useState } from 'react'

function ItemCount({initial, max, onAdd}) {
    
    const [count, setCount] = useState(initial)
    const sumar =() =>{
        count < max ? setCount(count+1) : alert ('No se pueden agregar más productos')      
    }
    const restar =() =>{
        count > initial ? setCount(count-1) : alert ('No hay productos que quitar')
    }
    const reset =()=> {
       setCount(initial)
    }

    return (  <div className='bg-light p-2 text-dark bg-opacity-75 d-flex justify-content-center row col-md-2 col-mx-auto shadow position-absolute top-50 start-50 translate-middle'>
        <h5 className='d-flex justify-content-center row'>Lentes de lectura</h5>              
            <h3 className='d-flex justify-content-center row'>{count}</h3>
            <button className='btn btn-outline-info col-md-6' onClick={sumar}><strong>+</strong></button>
            <button className='btn btn-outline-info col-md-6' onClick={restar}><strong>-</strong></button>
            <button className='btn btn-outline-warning' onClick={()=> {onAdd(count); reset()}}><strong>Agregar tu compra</strong></button>
            <button className ='btn btn-outline-danger' onClick={reset}><strong>Reset</strong> </button>
        </div> 
    )
}

export default ItemCount
