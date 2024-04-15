
import React from 'react'
import './card.css'

export default function Card({titulo,Texto,img}) {
  return (
    <div className='cont'>
      <div className='titulo'>
        <img className='imgc' src={img} alt='Sevico Especialista'/>       
        <h4>{titulo}</h4></div>
      <div className='texto'><p>{Texto}</p></div>
    </div>
  )



}