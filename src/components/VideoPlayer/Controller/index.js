import React from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import style from './style.module.scss'
import { serviceGetVideoList } from '../../../services/serviceGetVideoList';
import { useQuery } from 'react-query';

function VideoController() {
  
  const handleVideoPlay = async() => {
    const response = await serviceGetVideoList(null, "water")
    console.log(response)
  }
  return (
    <div className={style.container}>
      <Button type="ghost" icon={<PlayCircleOutlined />} onClick={handleVideoPlay}/>
    </div>
  )
}

export default VideoController
