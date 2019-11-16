
const UPDATE_POSITION = "UPDATE_POSITION"

const initialState = { 
  position: [0, 0],
}

const attackReducer = (state=initialState, action) => {
  switch(action.type){
    case UPDATE_POSITION:
      return {...state, position: action.position}
    default:
      return state
  }
}

export default attackReducer