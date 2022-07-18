import { CartContext } from './context/CartContext';
import { useContext} from 'react';
import { Link } from 'react-router-dom';


export default function Cart() {
  const { getItemPrice, cart, deleteItem, emptyCart, getItemQty } = useContext(CartContext);
  const cartEmpty = cart.length === 0
        
  return (
  <>
   <div class="container py-5 h-100">
     <div class="row d-flex justify-content-center align-Items-center h-100">
      <div class="col">
        <div class="card"></div>
        <p class="mb-1">Shopping cart</p>
     
      {cartEmpty ? 
        
          <><div className="cart">
                <div className="Title_card">
                  <div>
                    <div className="title_item">Nombre : </div>
                    <div className="qty_item">Cantidad :</div>
                    <div className="price_item"> Precio : $</div>
                  </div>
                </div>
              </div>
                 { cart.map(item => (
                     <div class="card mb-3" key = {item.id}>
                       <div class="card-body">
                         <div class="d-flex justify-content-between">
                           <div class="d-flex flex-row align-Items-center">
                            <picture>
                              <img src={item.pictureUrl}
                                 class="img-fluid rounded-3" alt={item.title} style={{width: "65px"}} />
                             </picture>
                             <div class="ms-3">
                               <p>{item.title}</p>
                               <p class="small mb-0">{item.description}</p>
                             </div>
                           </div>
                           <div class="d-flex flex-row align-Items-center">
                             <div style={{width: "50px"}}>
                              <p class="fw-normal mb-0">Cantidad :  {item.stock}</p>
                            </div>
                             <div style={{width: "80px"}}>
                               <p class="mb-0">Precio: $ {item.price}</p>
                             </div>
                             <div style={{width: "80px"}}>
                               <p class="mb-0">Precio : $ {item.quantity * item.price}</p>
                             </div>
                             <button onClick={() => deleteItem(item.id)} className="DelItemCard"><img className="img-fluid rounded-3" src={("../assets/LentesAviador")} alt={"item  "} width="43px" /> Eliminar </button>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title_amount"> Compra Total : $  {getItemPrice()} {getItemQty()} producto/s </div>
                    <Link to="/"><button className="btn btn-outline-primary"> Volver </button></Link>
                    <Link to="/checkout"> <button type="button" className="button cart_button_clear"> Concluir su compra </button></Link> 
                    <button type="button" className="button cart_button_checkout" onClick={emptyCart}> Vaciar carrito </button> 
                    </div>
                  </div>
                </>
      :
              <div className="cart_empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                <br/>
                <br/>
                <Link to="/"> <button type="button" className="button cart_button_clear"> Escoger su producto</button></Link> 
                <p className="empty_Cart"> No hay productos en el carrito</p>
              </div>
      }            
     </div>
   </div>
  </div> 
  </>

  )
    }




 