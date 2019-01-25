import React from 'react'

import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft}  from '@fortawesome/free-solid-svg-icons'

const BackIcon = (props) => {
    const {
        className,
        clickHandler
    } = props
    const buttonClasses = classNames('button-back', className)
    return (
        <FontAwesomeIcon 
            className={buttonClasses}
            icon={faChevronLeft} 
            onClick={clickHandler}
        />
    )
}

export default BackIcon