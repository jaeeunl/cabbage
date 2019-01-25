import React from 'react'

import AlbumCovers from '../../../AlbumCovers/AlbumCovers'
import SaveButton from './SaveButton/SaveButton'

import './PreviewMenu.scss'

const Preview = (props) => {
    const {
        currentSession,
        crops,
        photos,
        savePhotos,
        selectAlbumHandler,
        selectedAlbumName
    } = props
    return (
        <div className="camera--preview--menu">
            <AlbumCovers
                crops={crops}
                photos={photos}
                selectedAlbumName={selectedAlbumName}
                clickHandler={selectAlbumHandler}
            />
            <SaveButton
                savePhotos={savePhotos}
                currentSession={currentSession}
                selectedAlbumName={selectedAlbumName}
            />
        </div>
    )
}

export default Preview