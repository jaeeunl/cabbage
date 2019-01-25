import React from 'react'

import classNames from 'classnames'
import Webcam from "react-webcam";
import WebcamMsg from './WebcamMsg/WebcamMsg'

import './Webcam.scss'


let webcamcapture
const setRef = webcam => {
    webcamcapture = webcam;
}

const WebcamCapture = (props) => {
    const {
        cameraError,
        currentSession,
        isFlashOn,
        takePhoto,
        webcamError
    } = props
    const capture = () => {
        const imageSrc = webcamcapture.getScreenshot();

        takePhoto(imageSrc)
    }
    const videoConstraints = {
        facingMode: { },
        audio: false,
        screenshotFormat: "image/jpeg",
        screenshotQuality: 1,
        onUserMediaError: webcamError
    }
    const cameraClasses = classNames('camera--action--webcam', {
        'capture': isFlashOn
    })

    return (
        <div className={cameraClasses}>
            <Webcam 
                ref={setRef}
                videoConstraints={videoConstraints}
            />
            <WebcamMsg 
                cameraError={cameraError}
                currentSession={currentSession}
            />
            <span 
                className="camera--action--webcam--button"
                onClick={capture}
            >
            </span>
        </div>
    )
}

export default WebcamCapture