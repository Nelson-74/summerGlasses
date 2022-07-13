import React, { useState } from 'react'



function ItemCount({setQty,qty, onAdd,initial,setToBuy}) {
    
    const [quantity, setQuantityAdded] = useState(initial)
    const [buttonAct, setButtonAct] = useState(true)
    

    const world = (e) => {
        if(e.target.textContent === "Agregar al carrito"){
            setButtonAct(false)
        } 
    }

    const quantityAdd = () =>{
        if (quantity === initial) setQuantityAdded(quantity + 1) 
        if (qty > quantity) setQuantityAdded(quantity + 1)
        console.log(qty)
           
    }


    const quantitySubtract = () =>{
        if ( quantity > initial) {setQuantityAdded(quantity - 1)}
    }

    const reset = () => {
        setQuantityAdded(initial)
    }

    const shoppingCart = () => {
        if ( quantity => initial ) {setQuantityAdded(cart)}
    }


    function cart (){
        
    }

    return (  
        <div className="cart-container text-center">
            <div className="quantity-container">
            <p className="quantity">{quantity}</p>
                <button type=" button" className="product-btn quantity-btn btn" onClick={()=> quantitySubtract()}> - </button>
                <button type=" button" className="product-btn quantity-btn btn" disabled={!buttonAct}  onClick={(e) => {onAdd(quantity); reset(); setToBuy(true);shoppingCart(); world(e); setQty(qty - quantity); console.log(qty) }}>Agregar al carrito</button> 
                <button type=" button" className="product-btn quantity-btn btn" onClick={()=> quantityAdd()}> + </button>
                <button type=" button" className="product-btn quantity-btn btn" disabled={!buttonAct} onClick={reset}> Reset </button> 
            </div>
        </div>
    )
}

export default ItemCount
