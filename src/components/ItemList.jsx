import React from 'react'
import Item from './Item'


function ItemList({ products ,loading,error }) {
    return (
        <>
        <div> {loading && "Cargando los productos"}</div>
        <div>{error && "No se pueden cargar los productos"}</div>
        <div className="row">
            {products.map(product => <Item key={product.id} product = {product} />)}
        </div>

        </>
    )
}

export default ItemList
