import React from 'react'
import './InfoMode.css';

const infoMode = ({ text }) => {
  return (
    <div className='infomode'>
      <p>Dark Mode <a href="">O</a></p>
      <p>- Mino Web Oficial -</p>
      <p><a href="">English</a> - <a href="">Español</a></p>
    </div>
  )
}

export default infoMode