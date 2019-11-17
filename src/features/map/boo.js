import React from 'react'
import BooSprite from './boo.png'

const Boo = () => (
    <div
      style={{
          position: 'absolute',
          backgroundImage: `url(${BooSprite})`,
          backgroundPosition: '0 0',
          width: '25px',
          height: '25px'
      }}
    />
)

export default Boo;