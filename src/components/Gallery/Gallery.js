import React from 'react'

import AlbumCovers from '../AlbumCovers/AlbumCovers'
import Album from './Album/Album'
import BackIcon from '../UI/BackIcon/BackIcon'
import './Gallery.scss'

const Gallery = (props) => {
    const {
        closeAlbumHandler,
        crops,
        selectAlbumHandler,
        selectedAlbumName,
        openImageModal,
        photos,
    } = props

    if (selectedAlbumName) {
        const albumImages = photos.filter(photo => photo.cropType === selectedAlbumName)

        return (
            <div className="album-container">
                <BackIcon
                    className="album--back"
                    clickHandler={closeAlbumHandler}
                />
                <h2 className="album--title">
                    {selectedAlbumName}
                </h2>
                <Album 
                    albumImages={albumImages}
                    openImageModal={openImageModal}
                />
            </div>
        )
    } else {
        return (
            <AlbumCovers
                crops={crops}
                photos={photos}
                clickHandler={selectAlbumHandler}
            />
        )
    }
}

export default Gallery
