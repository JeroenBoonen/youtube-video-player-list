import React from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined, PauseCircleOutlined, SoundOutlined, RollbackOutlined } from '@ant-design/icons'
import style from './style.module.scss'

/**
 * Video Controller Component
 * @param {Boolean} playing
 * @param {Boolean} muted
 * @param {Boolean} loop
 * @param {Function} onHandlePlay
 * @param {Function} onHandleMute
 * @param {Function} onHandleLoop
 */
function VideoController({ playing, onHandlePlay, muted, onHandleMute, loop, onHandleLoop}) {
  const type = state => state ? 'primary' : 'secondary'
    
  return (
    <div className={style.container}>
      <Button className={style.btn} type={type(playing)} icon={!playing ? <PlayCircleOutlined />: <PauseCircleOutlined />} onClick={onHandlePlay} />
      <Button className={style.btn} type={type(muted)} icon={<SoundOutlined />} onClick={onHandleMute} />
      <Button className={style.btn} type={type(loop)} icon={<RollbackOutlined />} onClick={onHandleLoop} />
    </div>
  )
}

export default VideoController
