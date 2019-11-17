import store from '../../../config/store'
import { ATTACK_POSITION_X , ATTACK_POSITION_Y } from '../../../config/constants'

export default function handleMovement2(attack) {


    
  // const triggerAttackSpeed =  setInterval(fireAttack, 400) 
  
  // const clearAttack = () => {
  //   clearInterval(triggerAttackSpeed) 
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
    // fireAttack()
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


  return attack
}