import React from 'react'

const Item =({lente: lentes}) => {
    const {nombre,img,precio,desc,stock} = lentes
    
    return (
        <div className= "row">
        <div className="row row-cols-3 d-flex m-2 p-2 shadow "style={{width: "21rem"}}>
            <div className="card" style={{width: "20rem"}} >
               <img src={img} class="card-img-top" height="170 px" alt="foto de lentes"/>
                <div className="card-body ">
                   <h5 className="card-title">{nombre}</h5>
                   <p className="card-text">Precio: $ {precio}
                   <br/>
                    {desc}</p>
                    <br/>
                    <p className="card-text stock-detail">Hay {stock} productos en stock</p>
                   <a href="#/" class="btn btn-primary">Ver descripción</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Item
