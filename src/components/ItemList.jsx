import React from 'react'
import Item from './Item'

const ItemList = ({gafas})=> {
    return (
        <>
        
            <div className = '"row"'>
            { gafas?.map(gafa => <Item key={gafa.id} gafa={gafa}/>)}
            </div>
        
        </>
    )
}

export default ItemList
