import React from 'react'

import Screenshot from './Screenshot/Screenshot'

import './PreviewList.scss'

const ActionBoard = (props) => {
    const {
        currentSession,
        openImageModal
    } = props
   const screenshots = currentSession.map((img, index) => {
       return (
           <Screenshot
                key={index}
                imgData={img.imgData}
                openImageModal={openImageModal}
           />
       )
   })
    return (
        <ul className="camera--preview--list">
            {screenshots}
        </ul>
    )
}

export default ActionBoard