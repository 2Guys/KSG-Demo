import React from 'react'
import ghostSprite from '../enemy/kingGhost.png'
import { connect } from  'react-redux'
import handleMovement from './movement';

setInterval(handleMovement,3000)   

const Enemy = (props) => {
  return ( 
    <div 
      className='floating'
      style={{
        position: 'absolute',
        top:props.position[1],
        left: props.position[0],
        backgroundImage: `url(${ghostSprite})`,
        backgroundPosition: '0 0',
        width: '199px', 
        height: '180px'
      }}
    />

  );
}

const mapStateToProps = (state) => {
  return {
    position: state.enemy.position
  }
}

export default connect(mapStateToProps, null)(handleMovement(Enemy))