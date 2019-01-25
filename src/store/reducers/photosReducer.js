import * as actionTypes from '../actions/actionTypes';

const initialState = {
    photos: [],
    cameraError: false,
    currentSession: [],
    isCameraOpen: false,
    isActionBoardOpen: false,
    crops: [
        'Butterhead Lettuce',
        'Kale',
        'Arugular',
        'Bok Choy',
        'Romaine',
        'Basil',
        'Oakleaf',
        'Spinach',
    ],
    selectedAlbumName: '',
    isImageModalOpen: false,
    showFlash: false
}

const openCamera = (state, action) => {
    return {...state, ...action}
}

const closeCamera = (state, action) => {
    return {...state, ...action}
}

const openActionBoard = (state, action) => {
    return {...state, ...action}
}

const closeActionBoard = (state, action) => {
    return {...state, ...action}
}

const takePhoto = (state, action) => {
    return {
        ...state, 
        ...action,
        currentSession: [...state.currentSession, action.photo]
    }
}

const showFlash = (state, action) => {
    return {...state, ...action}
}

const hideFlash = (state, action) => {
    return {...state, ...action}
}

const savePhotos = (state, action) => {
    return {
        ...state, 
        ...action,
        photos: [...state.photos, ...state.currentSession]
    }
}

const webcamError = (state, action) => {
    return {...state, ...action}
}

const closeAlbumHandler = (state, action) => {
    return {...state, ...action}
}

const selectAlbumHandler = (state, action) => {
    return {...state, ...action}
}

const closeImageModal = (state, action) => {
    return {...state, ...action}
}

const openImageModal = (state, action) => {
    return {...state, ...action}
}

const openPreview = (state, action) => {
    return {...state, ...action}
}

const createReducer = () => {
    return function reducer (state = initialState, action) {
        switch ( action.type ) {
            case actionTypes['TAKE_PHOTO']: return takePhoto(state, action)
            case actionTypes['SHOW_FLASH']: return showFlash(state, action)
            case actionTypes['HIDE_FLASH']: return hideFlash(state, action)
            case actionTypes['SAVE_PHOTOS']: return savePhotos(state, action)
            case actionTypes['OPEN_CAMERA']: return openCamera(state, action)
            case actionTypes['OPEN_PREVIEW']: return openPreview(state, action)
            case actionTypes['OPEN_ACTION_BOARD']: return openActionBoard(state, action)
            case actionTypes['CLOSE_CAMERA']: return closeCamera( state, action)
            case actionTypes['CLOSE_ACTION_BOARD']: return closeActionBoard( state, action)
            case actionTypes['CLOSE_ALBUM']: return closeAlbumHandler(state, action)
            case actionTypes['SELECT_ALBUM']: return selectAlbumHandler(state, action)
            case actionTypes['CLOSE_IMAGE_MODAL']: return closeImageModal(state, action)
            case actionTypes['OPEN_IMAGE_MODAL']: return openImageModal(state, action)
            case actionTypes['WEBCAM_ERROR']: return webcamError(state, action)
            default: return state
        }
    }
}

export default createReducer