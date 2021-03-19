import React from 'react'

export default function VideoDetails({video, onVideoItemSelect}) {
    if(!video){
        return <div>LOADING...</div>
    }

    const videoId = video.etag
    const url =  `https://www.youtube.com/embed/${videoId}`
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}
