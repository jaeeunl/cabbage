import React from 'react'

import PreviewMenu from './PreviewMenu/PreviewMenu'
import PreviewList from './PreviewList/PreviewList';
import BackIcon from '../../UI/BackIcon/BackIcon'

import './PreviewBoard.scss'

const PreviewBoard = (props) => {
    const {
        currentSession,
        crops,
        openCamera,
        openImageModal,
        photos,
        savePhotos,
        selectAlbumHandler,
        selectedAlbumName
    } = props

    return (
        <div className="camera--preview">
            <BackIcon
                className="camera--preview--back"
                clickHandler={openCamera}
            />
            <PreviewList
                currentSession={currentSession}
                openImageModal={openImageModal}
            />
            <PreviewMenu
                crops={crops}
                currentSession={currentSession}
                photos={photos}
                savePhotos={savePhotos}
                selectedAlbumName={selectedAlbumName}
                selectAlbumHandler={selectAlbumHandler}
            />
        </div>
    )
}

export default PreviewBoard