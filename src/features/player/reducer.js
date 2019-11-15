const MOVE_PLAYER  = "MOVE_PLAYER"
const CHECK_MOVE = "CHECK_MOVE"
// const INCREASE_HP = "INCREASE_HP"


const initialState = { 
  position: [0, 0],
  movement: false,
  HP: 100,
  SB: 0,
  rate: 1
}

const playerReducer = (state=initialState, action) => {
  switch(action.type){
    case MOVE_PLAYER:
      return { ...state, position: action.payload.position}
    case CHECK_MOVE:
      console.log("TCL: playerReducer -> action.payload", action.payload.movement)
      return { ...state, movement: action.payload.movement}
    default:
      return state
  }
}

export default playerReducer
