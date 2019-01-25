import React from 'react'

import classNames from 'classnames'
import './Button.scss'

const Button = (props) => {
    const {
        className,
        clickHandler
    } = props
    const buttonClasses = classNames('button', className)

    return (
        <button
            className={buttonClasses}
            onClick={clickHandler}
        >
            {props.children}
        </button>
    )
}

export default Button