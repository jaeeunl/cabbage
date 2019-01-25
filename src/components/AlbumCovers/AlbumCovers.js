import React from 'react'

import Cover from './Cover/Cover'
import './AlbumCovers.scss'

const AlbumCover = (props) => {
    const {
        crops,
        photos,
        clickHandler,
        selectedAlbumName
    } = props

    const covers = crops.map(crop => {
        const images = photos.filter(photo => {
            return photo.cropType === crop
        })
    
        return (
            <Cover
                key={crop}
                cropName={crop}
                selectedAlbumName={selectedAlbumName}
                img={images[images.length - 1]}
                clickHandler={()=>clickHandler(crop)}
            />
        )
    })
    return (
        <div className="album-covers">
            <h1 className="album-covers--title">
                Crop Type
            </h1>
            <ul className="album-covers--list">
                {covers}
            </ul>
        </div>
    )
}

export default AlbumCover