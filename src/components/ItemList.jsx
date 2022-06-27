import React from 'react'
import Item from './Item'
//import gafas from '../products.json';

const ItemList = ({ gafas }) => {
    return (
        <>

            <div className="row">
                {gafas?.map(gafa => <Item key={gafa.id} gafa={gafas} />)}
            </div>

        </>
    )
}

export default ItemList
