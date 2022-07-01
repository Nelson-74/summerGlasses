import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext} from '../components/CartContext'

const ItemDetail = ({id,title, img,category, description,price, qty}) => {
  
  const [quantityAdded, setQuantityAdded]= useState(0)
  const {addItem}= useContext(CartContext)

  const handLeOnAdd = (qty) => {
    console.log(`se agregaron ${qty} ${title}`)
    addItem ({id, title, price, qty})
    setQuantityAdded(qty)

  };
  
    return (
      <>
        <article className="CartItem">
          <header className="ItemHeader">
              <h2 claSsName="ItemHeader"> {title}</h2>
          </header>
          <picture>
          <img src={img} alt={title} className="ItemImg"></img>
          </picture>
          <section>
          <p className="Info"> Categoria: {category}</p>
          <p className="Info"> Descripción: {description}</p>
          <p className="Info"> Precio: $ {price}</p>
          </section>
          <footer className="ItemFooter">{quantityAdded === 0
          ? <ItemCount qty ={qty} onAdd={handLeOnAdd}/>
          : <Link to="/cart">Terminar Compra</Link>
          }
          </footer>
        </article>
        </>
    )
}

export default ItemDetail
