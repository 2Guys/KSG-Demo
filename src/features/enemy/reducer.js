const MOVE_ENEMY = "MOVE_ENEMY"
const DECREASE_ENEMY_HP = "DECREASE_ENEMY_HP"

const initialState = { 
  HP: 5,
  position: [900,460],
}


export const decreasedHP = (HP) => {
  return {
    type: DECREASE_ENEMY_HP,
    HP
  }
}

const enemyReducer = (state=initialState, action) => {
  switch(action.type){
    case MOVE_ENEMY:
      return { ...state, position: action.position}
    case DECREASE_ENEMY_HP:
      return { ...state, HP: action.HP}
    default:
      return state
  }
}

export default enemyReducer
