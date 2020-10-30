import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

function VideoMeta() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  return (
    <Collapse accordion>
      <Panel header="Title" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="Description" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Channel Name" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}

export default VideoMeta
