import React from 'react'
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart, getItemQty, getItemPrice, emptyCart,deleteItem,} = useContext(CartContext)
         
      
  return (
    <>
    <div class="container py-5 h-100">
     <div class="row d-flex justify-content-center align-Items-center h-100">
      <div class="col">
        <div class="card"></div>
        <p class="mb-1">Shopping cart</p>
     
      { getItemQty() > 0 ? 
        
          <><div className="cart">
                <div className="Title_card">
                  <ul>
                    <li className="title_product">Name</li>
                    <li className="qty_product">Cantidad</li>
                    <li className="price_product"> Precio: $</li>
                  </ul>
                </div>
              </div>
                 { cart.map(Item => (
                     <div class="card mb-3">
                       <div class="card-body">
                         <div class="d-flex justify-content-between">
                           <div class="d-flex flex-row align-Items-center">
                            <div>
                              <img
                                 src={Item.img}
                                 class="img-fluid rounded-3" alt={Item.name} style={{width: "65px"}} />
                             </div>
                             <div class="ms-3">
                               <h5>{Item.name}</h5>
                               <p class="small mb-0">{Item.description}</p>
                             </div>
                           </div>
                           <div class="d-flex flex-row align-Items-center">
                             <div style={{width: "50px"}}>
                              <h5 class="fw-normal mb-0">Cantidad: {Item.count}</h5>
                            </div>
                             <div style={{width: "80px"}}>
                               <h5 class="mb-0">Precio: ${Item.price}</h5>
                             </div>
                             <div style={{width: "80px"}}>
                               <h5 class="mb-0">Precio Total: ${Item.count * Item.price}</h5>
                             </div>
                             <button onClick={() => deleteItem(Item.id)} className="DelItemCard"><img className="img-fluid rounded-3" src={(Item.img)} alt={Item.name} width="45px" />Eliminar</button>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title">Compra Total: {getItemQty()}</div>
                    <div className="order_total_amount">: $ {getItemPrice()} </div>
                    <Link to="/home"><button className="btn btn-outline-danger">Volver</button></Link>
                    <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Concluir su compra</button> <button type="button" className="button cart_button_checkout" onClick={emptyCart}> Vaciar carrito</button> </div>
                  </div>
                </div></>
        :
              <div className="cart_empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                <p className="empty_Cart">No hay productos en el carrito</p>
              </div>
      }
     
     </div>
   </div>
  </div>


</>
)
}

export default Cart
