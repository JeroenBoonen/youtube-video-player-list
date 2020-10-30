import React from 'react'
import { AutoComplete } from 'antd'

function SearchBox() {
  const onHandleSearch = value => {console.log(value)}

  return (
    <AutoComplete 
      style={{width:300}}
      onSearch={onHandleSearch}
    />
  )
}

export default SearchBox
