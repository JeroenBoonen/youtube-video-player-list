import React from 'react'
import { useYoutubeAPI } from './lib/useYoutubeAPI'
import VideoView from './VideoView'
import SearchBox from './SearchBox'
import Controller from './Controller'
import Meta from './Meta'
import style from './style.module.scss'


function VideoPlayer() {  
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [isLoop, setIsLoop] = React.useState(false)
  const [keyword, setKeyword] = React.useState('')
  const [ data, fetching, error ] = useYoutubeAPI(keyword)

  const handleVideoPlay = async() => setIsPlaying(!isPlaying)
  const handleMute = async() => setIsMuted(!isMuted)
  const handleLoop = async() => setIsLoop(!isLoop)

  return (
    <div className={style.container}>
      <SearchBox updateKeyword={setKeyword}/>
      <VideoView data={data} playing={isPlaying} loading={fetching} error={error}/>
      <Controller 
        playing={isPlaying} 
        onHandlePlay={handleVideoPlay} 
        disabled={fetching} 
        muted={isMuted}
        onHandleMute={handleMute}
        loop={isLoop}
        onHandleLoop={handleLoop}
      />
      <Meta data={data}/>
    </div>
  )
}

export default VideoPlayer
