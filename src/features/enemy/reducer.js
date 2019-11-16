const MOVE_ENEMY = "MOVE_ENEMY"

const initialState = { 
  position: [900,360],
}

const enemyReducer = (state=initialState, action) => {
  switch(action.type){
    case MOVE_ENEMY:
      return { ...action.payload}
    default:
      return state
  }
}

export default enemyReducer
