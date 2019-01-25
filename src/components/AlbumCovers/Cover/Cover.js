import React from 'react'

import classNames from 'classnames'

import './Cover.scss'

const Cover = (props) => {
    const {
        cropName,
        clickHandler,
        selectedAlbumName
    } = props
    const cropNameInLowerCase = cropName.toLowerCase()
    const coverClasses = classNames('album-covers--list--item', {
        'selected': selectedAlbumName === cropName,
        'romaine': cropNameInLowerCase.includes('romaine'),
        'bok-choy': cropNameInLowerCase.includes('bok'),
        'spinach': cropNameInLowerCase.includes('spinach'),
        'oakleaf': cropNameInLowerCase.includes('oakleaf'),
        'butterhead': cropNameInLowerCase.includes('butterhead'),
        'arugula': cropNameInLowerCase.includes('arugula'),
        'kale': cropNameInLowerCase.includes('kale'),
        'basil': cropNameInLowerCase.includes('basil')
    })
    return (
        <li
            className={coverClasses}
            onClick={clickHandler}
        >
            <div className="album-covers--list--item--image"></div>
            <h2 className="album-covers--list--item--title">
                {cropName}
            </h2>
        </li>
    )
}

export default Cover