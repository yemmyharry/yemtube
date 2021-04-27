import React from 'react'

export default function VideoDetails({video, onVideoItemSelect}) {
    if(!video){
        return <div>LOADING...</div>
    }

    const videoId = video.id.videoId
    const url =  `https://www.youtube.com/embed/${videoId}`
    return (
        <div className="video-detail col-md-8">
            <div className="container">
                <iframe className="responsive-iframe" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}
