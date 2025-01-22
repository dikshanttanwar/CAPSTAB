import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = ({id,backgroundImage}) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <ReactPlayer width={'100%'} height={'100%'} light={backgroundImage} controls={true} loop={true} playing={true} muted url={`https://www.youtube.com/watch?v=${id}`} />
    </div>
  )
}

export default VideoPlayer
