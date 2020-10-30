import React from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import style from './style.module.scss'

function VideoController() {
  return (
    <div className={style.container}>
      <Button type="ghost" icon={<PlayCircleOutlined />}/>
    </div>
  )
}

export default VideoController
