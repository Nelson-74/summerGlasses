import React, { createContext,useState,useEffect } from 'react'



export const CartContext = createContext({}) ;

  const MyProvider = ({children})=> {


const [cart, setCart]= useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):([]))

//Metodo Some- se encarga de detectar si el prod.a agregar, ya está en el carrito o no. Retorna booleano.
  const isInCart = (id) => {
  return cart.some ((x )=> x.id === id)
}


//ItemDetail- se va a encargar de agregar el prod al cart,sin pisar a los agregados antes. y si duplicado aumenta la cant.
const addItem=(item, count)=>{
  const newItem ={
    ...item,
    count,
  };
  if (isInCart(newItem.id)){
      const findItem= cart.find ((x) => x.id === newItem.id );
      const indexItem = cart.indexOf(findItem);
      const auxArray = [...cart];
      auxArray[indexItem].count += count;
      setCart(auxArray);
  }else{
    setCart([...cart, newItem]);
  }
};


//Vaciar el carrito-Cart- Boton
const emptyCart=()=>{
  setCart([])
};


//Metodo filter-Cart- Se encarga, en funcion del Id, de retornar un nvo array sin el prod. seleccionado
const deleteItem=(id)=>{
  const updatedCart = cart.filter((Item) => Item.id !== id);
  setCart(updatedCart);
};


//Metodo Reduce- CartWidget-Retorna la cant total de unid. que tiene nuestro state cart
const getItemCount=()=>{
    return cart.reduce((acc, x)=> (acc += x.count) , 0 );
};


// Metodo Reduce- Cart - Retorna el precio total del carrito
const getItemPrice = () => {
  return cart.reduce((acc, x)=> acc =+ x.count * x.price, 0)
};
  useEffect(()=> {
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

 return <CartContext.Provider value={{cart,isInCart, emptyCart,deleteItem, getItemCount, getItemPrice,addItem }}>{children}</CartContext.Provider>
};
export default MyProvider