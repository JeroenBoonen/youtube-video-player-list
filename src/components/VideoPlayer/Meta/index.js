import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

/**
 * Present Video Data Information - title, channel, description
 * @param {Object} data 
 */
function VideoMeta({ data }) {
  
  return (
    <Collapse accordion>
      <Panel header="Title" key="1">
        <p>{(data || {}).title}</p>
      </Panel>
      <Panel header="Description" key="2">
        <p>{(data || {}).description}</p>
      </Panel>
      <Panel header="Channel Name" key="3">
        <p>{(data || {}).channelTitle}</p>
      </Panel>
    </Collapse>
  )
}

export default VideoMeta
