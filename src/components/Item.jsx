import React from 'react'
import { Link } from 'react-router-dom'


const Item =({products}) => {
     
    
    return (
        <div className= "row">
        <div className="row row-cols-3 d-flex m-2 p-2 shadow "style={{width: "21rem"}}>
            <div className="card" style={{width: "20rem"}} >
               <img src={products.img} class="card-img-top" height="170 px" alt="foto de lentes"/>
                <div className="card-body ">
                   <h5 className="card-title">{products.title}</h5>
                   <p className="card-text">Categoria {products.category}</p>
                   <p className="card-text">Precio: $ {products.price}
                   <br/>
                    {products.description}</p>
                    <br/>
                    <p className="card-text qty-detail">Hay {products.qty} lentes en stock</p>
                   <Link to={'/item'+ products.id} className="btn btn-primary">Ver descripción</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Item
