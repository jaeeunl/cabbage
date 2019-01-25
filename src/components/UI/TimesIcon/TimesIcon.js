import React from 'react'

import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes }  from '@fortawesome/free-solid-svg-icons'

import './TimesIcon.scss'

const CancelButton = (props) => {
    const {
        className,
        clickHandler
    } = props
    const buttonClasses = classNames('button-close', className)

    return (
        <FontAwesomeIcon 
            className={buttonClasses}
            icon={faTimes} 
            onClick={clickHandler}
        />
    )
}

export default CancelButton