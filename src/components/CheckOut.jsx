import React from 'react';
import { useState, useContext  } from "react";
import { CartContext } from './context/CartContext.jsx';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import Cart from './Cart.jsx'; 



function CheckOut() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [idBuyed, setIdBuyed]=useState("");
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders');
    const {cart,getItemPrice} = useContext(CartContext)


    function handleClick(){
        const order = {
            buyer: {name, mail, phone},
            items: cart,
            total: getItemPrice(),
            date: new Date(),
        };

        addDoc(ordersCollection, order)
        .then(({id}) => {
          setIdBuyed(id);
        })
        .catch((error)=>{
            console.log(error);
        })

    }
   
    return (
        <>
           <Cart/>
            <div className="checkContainer">
            <h5 className="titleCheck">Ingrese sus datos para concluir su compra</h5>
            <h5 className="orderNumber">El código de su compra es: {idBuyed}</h5>
            <input onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" className="name"></input>
            <input onChange={(e) => setMail(e.target.value)} placeholder="Ingrese su mail" className="mail"></input>
            <input onChange={(e) => setPhone(e.target.value)} placeholder="Ingrese el número de celular" className="phone"></input>
            <button onClick={() => handleClick()} className='btn btn-secondary fw-bold p-2 m-2'>Terminar Compra</button>
        </div>
        </>
    );
}

export default CheckOut
