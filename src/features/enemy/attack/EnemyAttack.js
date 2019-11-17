import React from 'react';
import { connect } from  'react-redux'



const EnemyAttack = (props) => {
  const { enemyClassUpdate, enemy } = props

  let positionY 
  let positionX 

  if(enemyClassUpdate === 'ghostBeam'){
    positionY = enemy[1] + 140
    positionX = enemy[0] + 30
  }
  else{
    positionY = enemy[1] + 140
    positionX = enemy[0] - 625
  }

  

  return ( 
    <div 
      className={enemyClassUpdate}
      style={{
        background:'#ACD198',
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
    enemyClassUpdate: state.enemyAttack.enemyClassUpdate,
    enemy: state.enemy.position
  }
}

export default connect(mapStateToProps, null)(EnemyAttack)