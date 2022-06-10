import React from 'react'
import Item from './Item'

const ItemList = ({lentes})=> {
    return (
        <>
        <div className='d-flex m-5 p-5 '>
            <div className = 'row row-cols-3 justify-content-md-center'>
            { lentes?.map(lente => <Item key={lente.id} lente={lente}/>)}
            </div>
        </div>
        </>
    )
}

export default ItemList
