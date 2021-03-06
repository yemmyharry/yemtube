import React from 'react'
import VideoListItem from './VideoListItem'

export default function VideoList({videos, onVideoItemSelect}) {
    const videoItem = videos.map((video) => {
       return <VideoListItem key={video.etag} video={video} onVideoItemSelect={onVideoItemSelect}/>
    } )
    
    return (
        <ul className="col-sm-4 list-group right">
            {videoItem}
            
        </ul>
    )
}
 