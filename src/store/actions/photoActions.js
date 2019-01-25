import * as actionTypes from './actionTypes';

export const openCamera = () => {
    return {
        type: actionTypes['OPEN_CAMERA'],
        isCameraOpen: true
    }
}

export const closeCamera = () => {
    return {
        type: actionTypes['CLOSE_CAMERA'],
        isCameraOpen: false
    }
}

export const openPreview = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes['OPEN_PREVIEW'],
        })
        dispatch(closeCamera())
    } 
}

export const openActionBoard = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes['OPEN_ACTION_BOARD'],
            isActionBoardOpen: true
        })
        dispatch(openCamera())
    } 
}

export const closeActionBoard = () => {
    return (dispatch) => {
        dispatch(closeCamera())
        dispatch({
            type: actionTypes['CLOSE_ACTION_BOARD'],
            isActionBoardOpen: false,
            currentSession: []
        })
    }
}

export const showFlash = () => {
    return {
        type: actionTypes['SHOW_FLASH'],
        isFlashOn: true
    }
}

export const hideFlash = () => {
    return {
        type: actionTypes['HIDE_FLASH'],
        isFlashOn: false
    }
}

export const takePhoto = (imgData) => {
  const d = new Date()

  return (dispatch) => {
    dispatch({
        type: actionTypes['TAKE_PHOTO'],
        photo: {
            imgData,
            date: d,
        }
    })
    dispatch(showFlash())
    setTimeout(() => dispatch(hideFlash()), 500)
  }
}

export const webcamError = () => {
    return {
        type: actionTypes['WEBCAM_ERROR'],
        cameraError: true
    }
}

export const selectAlbumHandler = (crop) => {
    return {
        type: actionTypes['SELECT_ALBUM'],
        selectedAlbumName: crop
    }
}

export const savePhotos = (cropType, currentSession) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes['SAVE_PHOTOS'],
            currentSession: currentSession.map(img => img.cropType = cropType)
        })
        dispatch(closeActionBoard())
    }
}

export const closeAlbumHandler = () => {
    return {
        type: actionTypes['CLOSE_ALBUM'],
        selectedAlbumName: ''
    }
}

export const closeImageModal = (e) => {
    return {
        type: actionTypes['CLOSE_IMAGE_MODAL'],
        isImageModalOpen: false
    }
}

export const openImageModal = (imgSrc) => {
    return {
        type: actionTypes['OPEN_IMAGE_MODAL'],
        isImageModalOpen: true,
        imgModalSrc: imgSrc
    }
}

