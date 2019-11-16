import store from '../../config/store'
import playSound from '../../scripts/utility-functions'
export default function handleMovement(enemy) {



  function nextMove(oldPos) {
    const enemyAlgo = { 
      A: [900, 460],
      B: [900, 360],
      C: [1100, 360],
      D: [1100, 500]
    }

    if(oldPos[0] === enemyAlgo.A[0] && oldPos[1] === enemyAlgo.A[1]){
      return enemyAlgo.B
    }
    else if(oldPos[0] === enemyAlgo.B[0] && oldPos[1] === enemyAlgo.B[1]){
      playSound('kingGhost2')
      
      return enemyAlgo.C
    }
    else if(oldPos[0] === enemyAlgo.C[0] && oldPos[1] === enemyAlgo.C[1]){
      playSound('kingGhost3')
      return enemyAlgo.D
      
    }
    else{
      playSound('kingGhost1')
      return enemyAlgo.A
    }
  }
  

    const oldPos = store.getState().enemy.position
    store.dispatch({
      type: "MOVE_ENEMY",
      payload: {
        position: nextMove(oldPos)
      }
      }
    )
  


  return enemy
}