import React from 'react'
import {useState} from "react"

const Tour = ({id,image,info,name,price}) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
    </article>
  )
}

export default Tour
