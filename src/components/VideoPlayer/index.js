import React from 'react'
import { useYoutubeAPI } from './lib/useYoutubeAPI';
import VideoView from './VideoView'
import SearchBox from './SearchBox'
import Controller from './Controller'
import Meta from './Meta'
import style from './style.module.scss'


function VideoPlayer() {  
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');
  const { status, error, data, isFetching} = useYoutubeAPI(keyword)
  console.log({keyword, status, error, data, isFetching})
  
  const handleVideoPlay = async() => {
    setIsPlaying(!isPlaying);
    // const response = await serviceGetVideoList("water")
    // console.log(response)    
  }

  return (
    <div className={style.container}>
      <SearchBox updateKeyword={setKeyword}/>
      <VideoView url={data}/>
      <Controller playing={isPlaying} onHandlePlay={handleVideoPlay} enable={isFetching}/>
      <Meta />
    </div>
  )
}

export default VideoPlayer
