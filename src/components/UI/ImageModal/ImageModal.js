import React from 'react'

import classNames from 'classnames'

import TimesIcon from '../TimesIcon/TimesIcon'

import './ImageModal.scss'

const ImageModal = (props) => {
    const {
        imgModalSrc,
        closeImageModal,
        className
    } = props
    const modalClasses = classNames('image-modal', className)

    return (
        <div 
            className={modalClasses}
        >
            <TimesIcon
                className="image-modal--close"
                clickHandler={closeImageModal}
            />
            <img src={imgModalSrc} alt="modal" />
        </div>
    )
}

export default ImageModal