import React from 'react'

import CameraNav from './CameraNav/CameraNav'
import WebcamCapture from './Webcam/Webcam'

import './ActionBoard.scss'

const ActionBoard = (props) => {
    const {
        cameraError,
        closeActionBoard,
        currentSession,
        takePhoto,
        openPreview,
        isFlashOn,
        webcamError
    } = props
 
    return (
        <div className="camera--action">
            <CameraNav
                cameraError={cameraError}
                closeActionBoard={closeActionBoard}
                currentSession={currentSession}
                openPreview={openPreview}
            />
            <WebcamCapture 
                cameraError={cameraError}
                currentSession={currentSession}
                takePhoto={takePhoto}
                isFlashOn={isFlashOn}
                webcamError={webcamError}
            />
        </div>
    )
}
  
export default ActionBoard