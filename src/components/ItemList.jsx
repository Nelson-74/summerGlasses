import React from 'react'
import Item from './Item'

const ItemList = ({lentes})=> {
    return (
        <>
        
            <div className = 'map'>
            { lentes?.map(lente => <Item key={lente.id} lente={lente}/>)}
            </div>
        
        </>
    )
}

export default ItemList
