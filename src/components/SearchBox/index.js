import React from 'react'
import { AutoComplete } from 'antd'
import style from './style.module.scss'

function SearchBox() {
  const onHandleSearch = value => {console.log(value)}

  return (
    <div className={style.container}>
      <AutoComplete 
        placeholder="Type keyword.."
        style={{width:300}}
        onSearch={onHandleSearch}
      />
    </div>
  )
}

export default SearchBox
