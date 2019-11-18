import React from 'react'
import YebearSprite from '../player/Yebear.png'
import DeadYebear from '../player/dead.png'
import { connect } from  'react-redux'
import handleMovement from './movement';



const Player = (props) => {
  const { HP} = props
  let  id = null
  let sprite = YebearSprite
  if(!HP){ 
    id = 'dead'
    sprite = DeadYebear
  }
  return ( 
    <div className='player' id={id}
      style={{
        position: 'absolute',
        top:props.position[1],
        left: props.position[0],
        backgroundImage: `url(${sprite})`,
        backgroundPosition: '0 0',
        width: '100px', 
        height: '200px'
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    position: state.player.position,
    HP: state.player.HP
  }
}

export default connect(mapStateToProps, null)(handleMovement(Player))