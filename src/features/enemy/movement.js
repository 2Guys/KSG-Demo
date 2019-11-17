import store from '../../config/store'
import handleAttack from '../enemy/attack/handleAttack'
import playSound from '../../scripts/utility-functions'

export default function handleMovement(enemy) {


  function updateClass() {

    const attackClass = store.getState().enemyAttack.enemyClassUpdate

    if(attackClass === 'ghostBeam'){
      return 'ghostBeamWave'
    } 

    if(attackClass === 'ghostBeamWave'){
      handleAttack()
      return 'ghostBeam'
    }
  }

  function nextMove(oldPos) {
    const enemyAlgo = { 
      A: [900, 460],
      B: [900, 360],
      C: [1100, 360],
      D: [1100, 500]
    }

    if(oldPos[0] === enemyAlgo.A[0] && oldPos[1] === enemyAlgo.A[1]){
      dispatchAttack()
      return enemyAlgo.B
    }
    else if(oldPos[0] === enemyAlgo.B[0] && oldPos[1] === enemyAlgo.B[1]){
      playSound('kingGhost1')
      dispatchAttack()

      return enemyAlgo.C
    }
    else if(oldPos[0] === enemyAlgo.C[0] && oldPos[1] === enemyAlgo.C[1]){
      dispatchAttack()
      return enemyAlgo.D
    }
    else{
      playSound('kingGhost2')
      dispatchAttack()
      return enemyAlgo.A
    }
  }
  
  function dispatchAttack() {
    store.dispatch({
      type:'UPDATE_ENEMY_CLASS',
      enemyClassUpdate: updateClass()
    })
  }

    const oldPos = store.getState().enemy.position
    store.dispatch({
      type: "MOVE_ENEMY",
      position: nextMove(oldPos)
    })
  
  return enemy
}