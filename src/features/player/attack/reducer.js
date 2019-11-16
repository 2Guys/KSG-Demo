
const UPDATE_POSITION = "UPDATE_POSITION"
const RELEASE_ATTACK = 'RELEASE_ATTACK'

const initialState = { 
  position: [823, 550],
}

const attackReducer = (state=initialState, action) => {
  switch(action.type){
    case RELEASE_ATTACK:
      return { ...state, position: action.position}
    case UPDATE_POSITION:
      return {...state, position: action.position}
    default:
      return state
  }
}

export default attackReducer