// import { useContext, useState } from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ItemCount from './ItemCount'
// import { CartContext} from '../components/CartContext'

function ItemDetail ({products}) {
  const {title,img,price,description,stock,category} = products
    // const [unid, setUnids] = useState();
    // const [qty,setQty] = useState(1)

    // const {isIncart, addItem} = useContext(CartContext)
    //  const onAdd =(qty)=>{
    //   alert(`Cantidad de gafas : ${qty}`);
    //   setUnids(qty);
    //   isIncart(items.id)
    //   addItem(items, qty)
    //};

    return (
      <>
        <div>
           <div className= "row">
            <div className="row row-cols-3 d-flex m-3 p-3 shadow "style={{width: "21rem"}}>
              <div className="card" style={{width: "20rem"}} >
                <img src={img} class="card-img-top" height="170 px" alt="foto de lentes"/>
                   <div className="card-body ">
                       <h5 className="card-title">{title}</h5>
                       <p className="card-text">Categoria: {category}</p>
                          <p className="card-text">Precio: $ {price}
                            <br/>
                             {description}</p>
                            <br/>
                          <p className="card-text stock-detail">Hay {stock} lentes en stock</p>
                        <Link to="/" className="btn btn-primary">Ver descripción</Link>
                        <div className='col-x1-3 d-flex flex-colum align-items-center justify-content-center'>
                        </div>
                    </div>
                    <button>
                <Link to="/" className="btn btn-primary">Añadir al carrito</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //{unid > 0 ? <Link to={'/cart'} className="btn-fin"> Finalizar compra </Link> : <ItemCount max={stock} initial={1} onAdd={onAdd}/>}  */}
        </>
    )
}

export default ItemDetail
