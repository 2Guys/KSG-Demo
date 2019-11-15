import React from 'react'
import YebearSprite from '../player/Yebear.png'
import { connect } from  'react-redux'
import handleMovement from './movement';



const Player = (props) => {
  return ( 
    <div 
      style={{
        position: 'absolute',
        top:props.position[1],
        left: props.position[0],
        backgroundImage: `url(${YebearSprite})`,
        backgroundPosition: '0 0',
        'background-repeat': 'no-repeat',
        width: '100px', 
        height: '200px'
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    position: state.player.position
  }
}

export default connect(mapStateToProps, null)(handleMovement(Player))