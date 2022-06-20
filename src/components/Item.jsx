import React from 'react'
import { Link } from 'react-router-dom'

const Item =({lente: lentes}) => {
    const {nombre,img,price,description,stock} = lentes
    
    return (
        <div className= "row">
        <div className="row row-cols-3 d-flex m-2 p-2 shadow "style={{width: "21rem"}}>
            <div className="card" style={{width: "20rem"}} >
               <img src={img} class="card-img-top" height="170 px" alt="foto de lentes"/>
                <div className="card-body ">
                   <h5 className="card-title">{nombre}</h5>
                   <p className="card-text">Precio: $ {price}
                   <br/>
                    {description}</p>
                    <br/>
                    <p className="card-text stock-detail">Hay {stock} productos en stock</p>
                   <Link to="/" class="btn btn-primary">Ver descripción</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Item
