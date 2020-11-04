import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Spin } from 'antd'
import style from '../style.module.scss'
import { YOUTUBE_URL } from '../../../utils/config'

/**
 * Youtube Video Player with data from props
 * @param {Object} data
 * @param {Boolean} playing
 * @param {Boolean} loading
 * @param {Object} error
 * @returns 
 */
function VideoView({ data, playing, loading, error}) {
  console.log({ data, playing, loading})
  if (!data || (data && !Object.keys(data).length))  
    return <div className={style.noplayer}>'No Video Data'</div>
    
  if (loading) 
    return <div className={style.noplayer}><Spin /></div>

  if (error)
    return <div className={style.noplayer}>{error.message}</div>
  
  return <ReactPlayer url={`${YOUTUBE_URL}/watch?v=${data.id}`} className={style.player} playing={playing}/>  
}

export default VideoView
