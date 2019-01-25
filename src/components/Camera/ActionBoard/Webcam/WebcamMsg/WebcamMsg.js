import React from 'react'

import './WebcamMsg.scss'


const WebcamMsg = (props) => {
    const {
        cameraError,
        currentSession
    } = props

    return (
        <div className="camera--action--webcam--msg">
            {
                cameraError ?
                    <p className="camera--action--webcam--msg--error">
                        Sorry, but I couldn't open the camera.
                        <br/>
                        Please grant a permission to the browser, or try a different browser.
                    </p> :
                    <p className="camera--action--webcam--msg--session-length">
                        {currentSession.length} photos in the session
                    </p>
            }
        </div>
    )
}

export default WebcamMsg