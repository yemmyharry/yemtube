import React from 'react'


export default function VideoListItem({video, onVideoItemSelect}) {
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li onClick={()=>(onVideoItemSelect(video))}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title} </div>
                </div>

            </div>
            
        </li>
    )
}
