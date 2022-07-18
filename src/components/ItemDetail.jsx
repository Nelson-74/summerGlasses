import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


function ItemDetail({ item }) {
  const { title, pictureUrl, category, description, price, stock } = item;
  


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
        {/* <footer className="ItemFooter"> */}
        <footer className="ItemFooter">
          <ItemCount item={item} initial={1} />
          <Link to="/cart">Terminar Compra</Link>

          {/* <button type="button" onClick={onAdd} className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5"> Agregar al Carrito </button> */}
          {/* <Link to="/home"><button className="btn btn-outline-warning"> Volver al inicio</button></Link>
            { (getItemCount() > 0) ? <div className="btn-finalizar"><Link to="/cart" className="btn card-btn-cart"> Finalizar compra </Link></div>  : null } */}
        </footer>
      </article>
    </>
  )
}

export default ItemDetail
