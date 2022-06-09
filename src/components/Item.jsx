import React from 'react'

const Item =({lente: lentes}) => {
    const {nombre,img,precio,desc} = lentes
    
    return (
        <div className='text-center border-info col mb-2 margin:20'>
            <div className="card" style={{width: "15rem"}} >
               <img src={img} class="card-img-top" alt="foto de lentes"/>
                <div className="card-body">
                   <h5 className="card-title">{nombre}</h5>
                   <p className="card-text">Precio: $ {precio}
                   <br/>
                   Descripción: {desc}</p>
                   <a href="#/" class="btn btn-primary">Ver descripción</a>
                </div>
            </div>
        </div>
    )
}

export default Item
