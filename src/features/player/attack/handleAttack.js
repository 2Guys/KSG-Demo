import store from '../../../config/store'
import { decreasedHP } from '../../enemy/reducer'
import { BEAM_REACH , DAMAGE} from '../../../config/constants' 

export default function handleAttack(attack) {


  function updateClass() {

    const attackClass = store.getState().attack.classUpdate

    if(attackClass === 'ultralightBeam'){
      return 'ultralightBeamWave'
    } 

    if(attackClass === 'ultralightBeamWave'){
      return 'ultralightBeam'
    }
  }

  function decreaseHP() {
    let enemyHP =  store.getState().enemy.HP
  
    enemyHP -= DAMAGE

    if(enemyHP < 0 ){
      enemyHP = 0
    }
    console.log("TCL: decreaseHP -> enemyHP ", enemyHP )
    store.dispatch(decreasedHP(enemyHP))
  }

  function validateAttack() {
    const enemyPosition = store.getState().enemy.position
    const playerPosition = store.getState().player.position
    const enemyPosY = enemyPosition[1]
    const enemyPosX = enemyPosition[0]
  
    const playerPosX = playerPosition[0]

    if(enemyPosY > 360 ){
      if(playerPosX + BEAM_REACH > enemyPosX) {
        return decreaseHP()
      }
    }


  }  

  function dispatchAttack(){

    store.dispatch({
      type:'UPDATE_CLASS',
      classUpdate : updateClass()
    })
    validateAttack()
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