import React from 'react'

import './SaveButton.scss'

const SavePhotosBtn = (props) => {
    const {
        currentSession,
        savePhotos,
        selectedAlbumName
    } = props

    return (
        <button
            type="button"
            className="button--save"
            onClick={() => savePhotos(selectedAlbumName, currentSession)}
            disabled={currentSession.length === 0 || selectedAlbumName.length === 0}
        >
            Save
        </button>
    )
}

export default SavePhotosBtn