import React, { createContext,useState } from 'react'

export const CartContext = createContext({})
  const {Provider} = CartContext;


const MyProvider=({children}) => {

const [cart, setCart]= useState([])

  //Metodo Some- se encarga de detectar si el prod.a agregar, ya está en el carrito o no. Retorna booleano.
const isInCart = (id) => {
  return cart.some (x => x.id === id)
}


//ItemDetail- se va a encargar de agregar el prod al cart,sin pisar a los agregados antes. y si duplicado aumenta la cant.
// const addItem=(Item, quantity)=>{
//   const newItem ={
//     ...Item,quantity
//   }
//   if (isInCart(newItem.id)){
//       const findProduct = cart.find (x => x.id === newItem.id )
//       const productIndex = cart.indexOf(findProduct)
//       const auxArray = [...cart]
//       auxArray [productIndex].quantity += quantity
//       setCart(auxArray)
//   }else{
//     setCart([...cart], newItem)
//   }
// }


//Vaciar el carrito-Cart- Boton
const emptyCart=()=>{
  setCart([])
}


//Metodo filter-Cart- Se encarga, en funcion del Id, de retornar un nvo array sin el prod. seleccionado
const deleteItem=(id)=>{
  return (cart.filter(x => x.id !== id))
}


//Metodo Reduce- CartWidget-Retorna la cant total de unid. que tiene nuestro state cart
const getItemQty=()=>{
    return cart.reduce((acc, x)=> acc += x.quantity)
}


// Metodo Reduce- Cart - Retorna el precio total del carrito
const getItemPrice = () => {
  return cart.reduce((acc, x)=> acc =+ x.quantity * x.price, 0)
}
 return <Provider value={[cart,isInCart, emptyCart,deleteItem, getItemQty, getItemPrice ]}>{children}</Provider>
}
export default MyProvider