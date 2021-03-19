import React from 'react'

export default function VideoList({videos}) {
    return (
        <ul className="col-md-4">
            {videos.length}
        </ul>
    )
}
