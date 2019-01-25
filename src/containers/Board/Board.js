import React, {Component} from 'react'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import classNames from 'classnames'

import Logo from '../../components/Logo/Logo'
import Camera from '../../components/Camera/Camera'
import Gallery from '../../components/Gallery/Gallery'
import ImageModal from '../../components/UI/ImageModal/ImageModal'

import './Board.scss'

class Board extends Component {
    render () {
        const { 
            cameraError,
            closeAlbumHandler,
            closeCamera,
            closeActionBoard,
            closeImageModal,
            crops,
            currentSession,
            imgData,
            imgModalSrc,
            isCameraOpen,
            isActionBoardOpen,
            isImageModalOpen,
            openCamera,
            openPreview,
            openActionBoard,    
            takePhoto,
            openImageModal,
            photos,
            savePhotos,  
            selectAlbumHandler,
            selectedAlbumName,
            isFlashOn,
            webcamError
        } = this.props
        const boardClasses = classNames('board-container', {
            'mode-camera': isActionBoardOpen,
            'mode-gallery': !isActionBoardOpen && !selectedAlbumName,
            'mode-single-album': !isActionBoardOpen && selectedAlbumName
        })

        return (

            <div className={boardClasses}>
                <Logo />
                <Camera 
                    closeCamera={closeCamera}
                    closeActionBoard={closeActionBoard}
                    closeImageModal={closeImageModal}
                    crops={crops}
                    currentSession={currentSession}
                    imgData={imgData} 
                    isCameraOpen={isCameraOpen}
                    isActionBoardOpen={isActionBoardOpen}
                    openCamera={openCamera}
                    openPreview={openPreview}
                    openActionBoard={openActionBoard}            
                    openImageModal={openImageModal}
                    photos={photos}
                    savePhotos={savePhotos}
                    selectAlbumHandler={selectAlbumHandler}  
                    selectedAlbumName={selectedAlbumName}
                    isFlashOn={isFlashOn}
                    takePhoto={takePhoto}
                    webcamError={webcamError} 
                    cameraError={cameraError}                           
                />
                {
                    !isActionBoardOpen &&
                        <Gallery     
                            crops={crops}
                            closeAlbumHandler={closeAlbumHandler}
                            selectAlbumHandler={selectAlbumHandler}
                            selectedAlbumName={selectedAlbumName}                  
                            openImageModal={openImageModal}
                            photos={photos}
                        /> 
                }
                {
                    isImageModalOpen &&
                        <ImageModal 
                            closeImageModal={closeImageModal}
                            imgModalSrc={imgModalSrc}
                        /> 
                }

            </div>
            
        )
    }
}

const mapStateToProps = state => {
  return { ...state.photosReducer }
};

const mapDispatchToProps = dispatch => {
  return {
    closeCamera: () => dispatch( actions.closeCamera() ),
    closeActionBoard: () => dispatch( actions.closeActionBoard() ),
    closeAlbumHandler: () => dispatch( actions.closeAlbumHandler() ),
    closeImageModal: () => dispatch( actions.closeImageModal() ),
    openCamera: () => dispatch( actions.openCamera() ),
    openActionBoard: () => dispatch( actions.openActionBoard() ),
    openPreview: () => dispatch( actions.openPreview() ),
    openImageModal: (imgSrc) => dispatch( actions.openImageModal(imgSrc) ),
    savePhotos: (cropName, currentSession) => dispatch( actions.savePhotos(cropName, currentSession) ),
    selectAlbumHandler: (cropName) => dispatch( actions.selectAlbumHandler(cropName) ),
    takePhoto: (imgData) => dispatch( actions.takePhoto(imgData) ),
    webcamError: () => dispatch( actions.webcamError() )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Board )