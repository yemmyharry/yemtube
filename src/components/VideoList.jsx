import React from 'react'
import VideoListItem from './VideoListItem'

export default function VideoList({videos, video}) {
    const videoItem = videos.map((video) => {
       return <VideoListItem key={video.etag} video={video} />
    } )
    
    return (
        <ul className="col-md-4 list-group">
            {videoItem}
            
        </ul>
    )
}
 