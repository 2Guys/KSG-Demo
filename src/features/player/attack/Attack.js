import React from 'react';
import { connect } from  'react-redux'
import handleAttack from './handleAttack';



const Attack = (props) => {
  const { classUpdate, player } = props
    let positionY 
    let positionX
  
  
    if(classUpdate === "ultralightBeam"){
        positionY = player[1] + 100
        positionX = player[0] + 60
    }
    else {
        positionY = player[1] + 75
        positionX = player[0] + 60
    }
  
  
  return ( 
    <div 
      className={classUpdate}
      style={{
        background:'#fff',
        position: 'absolute',
        top:positionY,
        left: positionX,
        'border-radius': '50%',
        opacity:'.8' 
      }}
    />
  );
}


const mapStateToProps = (state) => {
  return {
    classUpdate: state.attack.classUpdate,
    player: state.player.position
  }
}

export default connect(mapStateToProps, null)(handleAttack(Attack))