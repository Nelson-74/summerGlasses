import React, { createContext } from 'react'

export const CartContext = createContext()
  const {Provider} = CartContext;






const MyProvider=({children}) =>{

  const [cart, setCart]= useState([])

  //Metodo Some- se encarga de detectar si el prod.a agregar, ya está en el carrito o no. Retorna booleano.
const isInCart = (id) => {}


// ItemDetail- se va a encargar de agregar el prod al cart,sin pisar a los agregados antes. y si duplicado aumenta la cant.
const AddCart=()=>{}


//Vaciar el carrito-Cart- Boton
const empyCart=()=>{}


//Metodo filter-Cart- Se encarga, en funcion del Id, de retornar un nvo array sin el prod. seleccionado
const deleteCart=()=>{}


//Metodo Reduce- CartWidget-Retorna la cant total de unid que tiene nuestro state cart
const getItemQty=()=>{}


// Metodo Reduce- Cart - Retorna el precio total del carrito
const getItemPrice = () => {}
  return <Provider>{children}</Provider>
}
export default MyProvider