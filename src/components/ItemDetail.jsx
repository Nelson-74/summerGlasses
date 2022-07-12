import { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext} from './context/CartContext.jsx'

const ItemDetail = ({id,title, pictureUrl,category, description,price, stock}) => {
  
  const [quantityAdded, setQuantityAdded]= useState(0)
  const {addItem}= useContext(CartContext)
   

  
  const handLeOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} ${title}`)
    addItem ({id, title, price, quantity})
    setQuantityAdded(quantity)

  }
  
  // const onAdd=()=>{
  //   isInCart(item.id);
  //   addItem(item);
   
    //}
  
    return (
      <>
        <article className="CartItem">
          <header className="ItemHeader">
              <h2 className="ItemHeader"> {title}</h2>
          </header>
          <picture>
          <img src={pictureUrl} alt={title} className="ItemImg"></img>
          </picture>
          <section>
          <p className="Info"> Categoria: {category}</p>
          <p className="Info"> Descripción: {description}</p>
          <p className="Info"> Precio: $ {price}</p>
          <p className="Info"> Stock: {stock}</p>
          </section>
          <footer className="ItemFooter">{quantityAdded === 0
          ? <ItemCount qty ={stock} onAdd={handLeOnAdd}/>
          : <Link to="/cart">Terminar Compra</Link>
          }
          {/* <button type="button" onClick={onAdd} className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5"> Agregar al Carrito </button> */}
          {/* <Link to="/home"><button className="btn btn-outline-warning"> Volver al inicio</button></Link>
          { (getItemCount() > 0) ? <div className="btn-finalizar"><Link to="/cart" className="btn card-btn-cart"> Finalizar compra </Link></div>  : null } */}
          </footer>
        </article>
        </>
    )
}

export default ItemDetail
