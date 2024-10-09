import React from 'react'
import '../Styles/JobsTable.css'

const JobsTable = () => {
  return (
    <div id='jobsHolder'>
      <table id='jobsTable'>
        <tr>
          <th>Title</th>
          <th>Company</th>
          <th>Link</th>
        </tr>
      </table>
    </div>
  )
}

export default JobsTable