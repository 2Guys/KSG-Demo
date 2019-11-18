import React from 'react'
import BooSprite from './boo2.png'

const Boo = () => (
    <div 
      className= 'boos'
      style={{
          position: 'absolute',
          backgroundImage: `url(${BooSprite})`,
          backgroundPosition: '0 0',
          width: '220px',
          height: '190px'
      }}
    />
)

export default Boo;