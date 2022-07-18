
import React, { createContext,useState,useEffect } from 'react'

export const CartContext = createContext() ;
const {Provider} = CartContext;

export function MyProvider ({children}) {
  
const [cart, setCart]= useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):[]);


//Metodo Some- se encarga de detectar si el prod.a agregar, ya está en el carrito o no. Retorna booleano.
  const isInCart = (id) => {
  return cart.some ((x )=> x.id === id)
}

//ItemDetail- se va a encargar de agregar el prod al cart,sin pisar a los agregados antes. y si duplicado aumenta la amount.
const addItem=(item, count)=>{
  let position = isInCart (item.id)
  
  if (position === -1){
    setCart([...cart, {...item, count: count}])
  }else{
    let auxArray = [...cart]
    auxArray[position].count = auxArray[position].count + count
    setCart(auxArray)
  }
};
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart])

//Vaciar el carrito-Cart- Boton
const emptyCart=()=>{
  setCart([])
};


//Metodo filter-Cart- Se encarga, en funcion del Id, de retornar un nvo array sin el prod. seleccionado
const deleteItem=(id)=>{
  setCart(cart.filter(item => item.id !== id))
};


//Metodo Reduce- CartWidget-Retorna la amount total de unid. que tiene nuestro state cart
const getItemQty=()=>{
    return cart.reduce((acc, item)=> acc += item.count , 0 );
};


// Metodo Reduce- Cart - Retorna el precio total del carrito
const getItemPrice = () => {
  return cart.reduce((acc, item)=> acc =+ item.count * item.price, 0)
};


 return (
   <Provider value={{cart,isInCart, emptyCart,deleteItem, getItemQty, getItemPrice,addItem}}> {children} </Provider> );
};
