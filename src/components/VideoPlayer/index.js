import React from 'react'
import ReactPlayer from 'react-player'
import Controller from './Controller'
import Meta from './Meta'
import style from './style.module.scss'

function VideoPlayer() {
  return (
    <div className={style.container}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={style.player}/>  
      <Controller />
      <Meta />
    </div>
  )
}

export default VideoPlayer
