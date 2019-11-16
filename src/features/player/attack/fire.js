// import store from '../../../config/store'
// import { SPRITE_SIZE } from '../../config/constants'

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

  function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 32: 
        return  console.log("PRESSED")
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