import React from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import style from './style.module.scss'

function VideoController({ playing, onHandlePlay, disabled}) {
    
  return (
    <div className={style.container}>
      <Button type="ghost" icon={!playing ? <PlayCircleOutlined />: <PauseCircleOutlined />} onClick={onHandlePlay} disabled={disabled}/>
    </div>
  )
}

export default VideoController
