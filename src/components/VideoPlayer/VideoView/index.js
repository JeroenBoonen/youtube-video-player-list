import React from 'react'
import ReactPlayer from 'react-player/lazy'
import style from '../style.module.scss'
import { YOUTUBE_URL } from '../../../utils/config'

function VideoView({ data }) {
  if(data === undefined)  return <div className={style.noplayer}>'No Video Data'</div>
  return <ReactPlayer url={`${YOUTUBE_URL}/watch?v=${data.id}`} className={style.player}/>  
}

export default VideoView
