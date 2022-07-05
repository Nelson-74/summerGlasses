import React, { useState } from 'react'
//import { getProducts } from '../asyncMock'


function ItemCount({setLot,lot, onAdd,initial = 1,setToBuy}) {
    
    const [count, setCount] = useState(initial)
    const [buttonAct, setButtonAct] = useState(true)
    

    const world = (e) => {
        if(e.target.textContent === "Agregar al carrito"){
            setButtonAct(false)
        } 
    }

    const countAdd = () =>{
        if (count === initial) setCount(count + 1) 
        if (count < lot) setCount(count + 1)
        console.log(lot)
           
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
                <button type=" button" className="product-btn count-btn btn" onClick={()=> countSubtract()}> - </button>
                 <button type=" button" className="product-btn count-btn btn" disabled={!buttonAct}  onClick={(e) => {onAdd(count); reset(); setToBuy(true);shoppingCart(); world(e); setLot(lot - count); console.log(lot) }}>Agregar al carrito</button> 
                <button type=" button" className="product-btn count-btn btn" onClick={()=> countAdd()}> + </button>
                <button type=" button" className="product-btn count-btn btn" disabled={!buttonAct} onClick={reset}> Reset </button> 
            </div>
        </div>
    )
}

export default ItemCount
