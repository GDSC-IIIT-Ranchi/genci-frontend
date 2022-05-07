import React from 'react'

function DisplayStuCerti({url}) {
  return (
        <div className='imageBox'>
          <a href={url} download>
          <img src={url} className="image"/>
          </a>
        </div>
  )
}

export default DisplayStuCerti;