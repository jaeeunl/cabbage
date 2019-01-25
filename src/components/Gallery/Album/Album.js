import React from 'react'

import ItemsByDate from './ItemsByDate/ItemsByDate'
import './Album.scss'

const getFullDate = (d) => {
    const year = d.getFullYear()
    const month = d.getMonth()
    const date = d.getDate()
    const fullDate = year.toString() + month.toString() + date.toString()

    return fullDate
}

const getFormattedDate = (d) => {
    // conver date object to a string and then split to an array. example ['Tue', 'Jan', '31', '2019' <time>]
    const dInStrArr = d.toString().split(' ') 
    const formattedDate = `${dInStrArr[0]}, ${dInStrArr[1]} ${dInStrArr[2]}, ${dInStrArr[3]}`

    return formattedDate
}

const Album = (props) => {
    const {
        albumImages,
        openImageModal
    } = props
    const itemsByDateObj = albumImages.reduce((obj, item) => {
        const fullDate = getFullDate(item.date)

        if (obj[fullDate]) {
            obj[fullDate].images.push(item)
        } else {
            const formattedDate = getFormattedDate(item.date)

            obj[fullDate] = {
                formattedDate,
                images: [item]
            }
        }
        return obj
    }, {})
    const itemsByDate = Object.keys(itemsByDateObj).map(date => {
        const items = itemsByDateObj[date]

        return (
            <ItemsByDate
                key={date}
                date={items.formattedDate}
                images={items.images}
                openImageModal={openImageModal}
            />
        )
    })
    return (
        <div className="album">
            {
                albumImages.length ? 
                    itemsByDate :
                    <p className="album--msg">Nothing here!</p>
            }
        </div>
    )
}

export default Album
