import React from 'react'

import TimesIcon from '../../../UI/TimesIcon/TimesIcon'
import Button from '../../../UI/Button/Button'

import './CameraNav.scss'

const CameraNav = (props) => {
    const {
        closeActionBoard,
        currentSession,
        openPreview
    } = props

    return (
        <nav className="camera--action--nav">
            <TimesIcon
                className="camera--action--nav--close"
                clickHandler={closeActionBoard}
            />
            {
                currentSession.length ?
                    <Button 
                        className="camera--action--nav--next"
                        clickHandler={openPreview}
                    >
                        Next
                    </Button> :
                    null
            }
        </nav>
    )
}

export default CameraNav