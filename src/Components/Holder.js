import React from 'react'
import '../Styles/Holder.css'
import Title from './Title'
import InsertBox from './InsertBox'
import JobsTable from './JobsTable'

const Holder = () => {
  return (
    <div id='main'>
      <Title />
      <InsertBox />
      <JobsTable />
    </div>
  )
}

export default Holder