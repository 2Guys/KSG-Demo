import store from '../../../config/store'
import { decreasedHP, increasedSB } from '../../player/reducer'
import { ENEMY_DAMAGE, BEAM_REACH} from '../../../config/constants'

export default function handleAttack() {

  function decreaseHP() {
    let playerHP =  store.getState().player.HP
  
    playerHP -= ENEMY_DAMAGE

    if(playerHP < 0 ){
      playerHP = 0
    }

    store.dispatch(decreasedHP(playerHP))
    increaseSB()
  }

  function increaseSB() {
    let playerSB = store.getState().player.SB

    playerSB += 25

    if(playerSB > 100){
      playerSB = 100
    }

    store.dispatch(increasedSB(playerSB))
  }

  function validateAttack() {
    const enemyPosition = store.getState().enemy.position
    const playerPosition = store.getState().player.position

    const enemyPosX = enemyPosition[0]
  
    const playerPosX = playerPosition[0]


    if(playerPosX > enemyPosX - BEAM_REACH) {
      return decreaseHP()
    }

  }  

  validateAttack()
}