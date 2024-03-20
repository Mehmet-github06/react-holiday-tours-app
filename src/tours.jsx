import React from 'react'
import Tour from "./Tour.jsx"
import "./Tours.css"

const Tours = ({tours}) => {
  return (
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='line'></div>
      <Tour/>
    </div>
  )
}

export default Tours
