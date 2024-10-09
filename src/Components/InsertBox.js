import React from 'react'
import '../Styles/InsertBox.css'

const InsertBox = () => {
  return (
    <div id='insertHolder'>
      <input id='jobTitle' type='text' placeholder='Title..'></input>
      <input id='jobCompany' type='text' placeholder='Company..'></input>
      <input id='jobTitle' type='text' placeholder='Link..'></input>
      <button id='enterButton'>Enter</button>
    </div>
  )
}

export default InsertBox