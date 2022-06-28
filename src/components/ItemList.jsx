import React from 'react'
import Item from './Item'
//import products from '../products.json';

const ItemList = ({ products }) => {
    return (
        <>

            <div className="row">
                {products?.map(product => <Item key={product.id} product={products} />)}
            </div>

        </>
    )
}

export default ItemList
