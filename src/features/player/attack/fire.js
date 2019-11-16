import store from '../../../config/store'
import { ATTACK_POSITION_X , ATTACK_POSITION_Y } from '../../../config/constants'

export default function handleMovement2(attack) {


  // function handleKeyUp(e) {
  //   e.preventDefault()

  //   store.dispatch({
  //     type: "CHECK_MOVE",
  //     payload: {
  //       movement: false
  //     }
  //     }
  //   )
  // }

  function updatePosition() {
    const playerPos = store.getState().player.position
    return [playerPos[0] + ATTACK_POSITION_X, playerPos[1] + ATTACK_POSITION_Y]
  }

  function dispatchAttack(){
    store.dispatch({
      type:'UPDATE_POSITION',
      position: updatePosition()
    })
  }

  function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 32: 
        return  dispatchAttack()
      default: 
        console.log(e.keyCode)
    }
  }
  
  
  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })

  // window.addEventListener('keyup', (e) => {
  //   handleKeyUp(e)
  // })

  return attack
}