import React from 'react'
import './Title.css';
import imagen from'./2.png' ;

const Title = () => {
  return (
    <div className='title-container'>
        <h1 className='title'>Mino</h1>
        <img src={imagen} alt="Logo Mino" />
        <h2 className='slogan'>Tu Agenda Virtual</h2>
    </div>
  )
}

export default Title