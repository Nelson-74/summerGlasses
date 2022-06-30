import React from 'react'
import Item from './Item';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart, getItemCount, getItemPrice, emptyCart,deleteItem,} = useContext(MyContext);
         
      
   return (
    <>
    <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-Items-center h-100">
      <div class="col">
        <div class="card"></div>
        <p class="mb-1">Shopping cart</p>
        {getItemCount() > 0 
        ?
          <div className="cart">
            <div className="Title_card">
                <ul>
                   <li className="title_product">Name</li>
                   <li className="qty_product">Cantidad</li>
                   <li className="price_product"> Precio: $</li>
                   <li></li>
                </ul>
            </div>
          </div> 
          {cart.map(Item => (
             <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-Items-center">
                        <div>
                          <img
                            src={Item.img}
                            class="img-fluid rounded-3" alt={Item.name} style="width: 65px;"/>
                        </div>
                        <div class="ms-3">
                          <h5>{Item.name}</h5>
                          <p class="small mb-0">{Item.description}</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-Items-center">
                        <div style="width: 50px;">
                          <h5 class="fw-normal mb-0">Cantidad: {Item.count}</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">Precio: ${Item.price}</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">Precio Total: ${Item.count * Item.price}</h5>
                        </div>
                        <button onClick={() => deleteItem(Item.id)} className="DelItemCard" ><img className="img-fluid rounded-3" src={("../product/img")} alt={Item.name} width="45px" />Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
          ))} 
                <div className="order_total">
                    <div className="order_total_content text-md-right">
                        <div className="order_total_title">Compra Total: {getItemCount()}</div>
                            <div className="order_total_amount"> : $ {getItemPrice()} </div>
                        </div>
                    </div>
                    <Link to="/home"><button className="btn btn-outline-danger">Volver</button></Link>
                    <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Concluir su compra</button> <button type="button" className="button cart_button_checkout"onClick={emptyCart}> Vaciar carrito</button> </div>
        :
        <p className='emptyCart'>No hay productos en el carrito</p>
        </div>
      </div>
    </div>     
</>
)}

export default Cart
