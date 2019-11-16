import React from 'react';
import { connect } from  'react-redux'
import handleAttack from './fire';

const Attack = (props) => {
  return ( 
    <div 
      style={{
        background:'#00ff00',
        height: '50px',
        width: '2px',
        position: 'absolute',
        top:props.position[1],
        left: props.position[0],
      }}
    />
  );
}


const mapStateToProps = (state) => {
  return {
    position: state.attack.position
  }
}

export default connect(mapStateToProps, null)(handleAttack(Attack))