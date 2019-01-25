import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera} from '@fortawesome/free-solid-svg-icons'

import ActionBoard from './ActionBoard/ActionBoard'
import PreviewBoard from './PreviewBoard/PreviewBoard'
import './Camera.scss'

const Camera = (props) => {
    const {
        cameraError,
        closeActionBoard,
        currentSession,
        crops,
        isCameraOpen,
        isActionBoardOpen,
        takePhoto,
        openCamera,
        openPreview,
        openActionBoard,   
        openImageModal,
        photos,      
        savePhotos,
        selectAlbumHandler,
        selectedAlbumName,
        isFlashOn,
        webcamError      
    } = props

    return (
        <div className="camera">
            {
                isActionBoardOpen ?                
                    isCameraOpen ?
                        <ActionBoard
                            cameraError={cameraError}
                            closeActionBoard={closeActionBoard}
                            currentSession={currentSession}
                            takePhoto={takePhoto}                      
                            openPreview={openPreview}                                                                          
                            photos={photos}    
                            isFlashOn={isFlashOn}  
                            webcamError={webcamError}                   
                        /> :
                        <PreviewBoard    
                            currentSession={currentSession}
                            crops={crops}
                            openCamera={openCamera}
                            openImageModal={openImageModal}
                            photos={photos}                       
                            savePhotos={savePhotos}
                            selectAlbumHandler={selectAlbumHandler} 
                            selectedAlbumName={selectedAlbumName}
                        /> :
                    <FontAwesomeIcon 
                        className="camera--icon" 
                        icon={faCamera} 
                        onClick={openActionBoard}
                    />
            }
      </div>
    )
}

export default Camera
