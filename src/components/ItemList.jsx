import React from 'react'
import Item from './Item'

const ItemList = ({lentes})=> {
    return (
        <div className ='d-flex flexWrap-wrap shadow'>
            { lentes?.map(lente => <Item key={lente.id} lente={lente}/>)}
        </div>
    )
}

export default ItemList
