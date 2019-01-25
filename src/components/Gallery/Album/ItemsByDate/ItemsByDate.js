import React from 'react'

import Item from './Item/Item'
import './ItemsByDate.scss'

const ItemsByDate = (props) => {
    const {
        date,
        images,
        openImageModal
    } = props
    const items = images.map((photo, index) => {
        return (
            <Item 
                key={index}
                openImageModal={openImageModal}
                photo={photo}
            />
        )
    })
    return (
        <div className="album--items-by-date">
            <h3 className="album--items-by-date--date">
                {date}
            </h3>
            <ul className="album--items-by-date--list">
                {items}
            </ul>
        </div>
    )
}

export default ItemsByDate
