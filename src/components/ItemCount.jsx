import React, { useState } from 'react'
//import { getProducts } from '../asyncMock'


function ItemCount({setQty,qty, onAdd,initial= "1",setToBuy}) {
    
    const [count, setCount] = useState(initial)
    const [buttonAct, setButtonAct] = useState(true)
    

    const world = (e) => {
        if(e.target.textContent === "Agregar al carrito"){
            setButtonAct(false)
        } 
    }

    const countAdd = () =>{
        if (count === initial) setCount(count + 1) 
        if (qty > count) setCount(count + 1)
        console.log(qty)
           
    }


    const countSubtract = () =>{
        if ( count > initial) {setCount(count - 1)}
    }

    const reset = () => {
        setCount(initial)
    }

    const shoppingCart = () => {
        if ( count => initial ) {setCount(cart)}
    }


    function cart (){
        
    }

    return (  
        <div className="cart-container">
            <div className="count-container">
            <p className="count">{count}</p>
                <button type=" button" className="product-btn count-btn btn" onClick={()=> countSubtract()}> - </button>
                <button type=" button" className="product-btn count-btn btn" disabled={!buttonAct}  onClick={(e) => {onAdd(count); reset(); setToBuy(true);shoppingCart(); world(e); setQty(qty - count); console.log(qty) }}>Agregar al carrito</button> 
                <button type=" button" className="product-btn count-btn btn" onClick={()=> countAdd()}> + </button>
                <button type=" button" className="product-btn count-btn btn" disabled={!buttonAct} onClick={reset}> Reset </button> 
            </div>
        </div>
    )
}

export default ItemCount
