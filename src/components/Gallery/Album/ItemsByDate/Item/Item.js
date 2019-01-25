import React from 'react'

import './Item.scss'

const item = (props) => {
    const {
        openImageModal,
        photo
    } = props

    return (
        <li 
            className="album--items-by-date--item"  
            onClick={() => openImageModal(photo.imgData)}
        >
            <img 
                src={photo.imgData}
                alt={photo.data}
            />
        </li>
    )
}

export default item
