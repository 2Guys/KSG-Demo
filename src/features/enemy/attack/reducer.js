

const UPDATE_ENEMY_CLASS = "UPDATE_ENEMY_CLASS"

const initialState = {   
  enemyClassUpdate: 'ghostBeamWave'
}

const enemyAttackReducer = (state=initialState, action) => {
  switch(action.type){
    case UPDATE_ENEMY_CLASS:
      return { ...state, enemyClassUpdate: action.enemyClassUpdate}
    default:
      return state
  }
}

export default enemyAttackReducer