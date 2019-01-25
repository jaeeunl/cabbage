import React from 'react'

import './Screenshot.scss'

const Screenshot = (props) => {
    const {
        imgData,
        openImageModal
    } = props

    return (
        <li 
            className="camera--preview--screenshot"
            onClick={()=>openImageModal(imgData)}
        >
            <img src={imgData} alt="screenshot" />
        </li>
    )
}

export default Screenshot