import React from 'react'
import BooSprite from './boo.png'

const Boo = () => (
    <div
      style={{
          backgroundImage: `url(${BooSprite})`,
          backgroundPosition: '0 0',
          width: '21',
          height: '23px'
      }}
    />
)

export default Boo;