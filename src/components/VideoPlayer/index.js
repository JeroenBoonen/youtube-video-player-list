import React from 'react'
import ReactPlayer from 'react-player'
import style from './style.module.scss'
import { Collapse } from 'antd'

const { Panel } = Collapse

function VideoPlayer() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  return (
    <div className={style.container}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={style.player}/>  
      <Collapse>
        <Panel header="Title" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Descript" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Channel Name" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default VideoPlayer
