const UPDATE_DISPLAY = "UPDATE_DISPLAY"

const initialState = { 
  display: 'none'
}


export const updateDisplay = (display) => {
  return { 
    type: UPDATE_DISPLAY,
    display
  }
}

const gameOverReducer = (state=initialState, action) => {
  switch(action.type){
    case UPDATE_DISPLAY: 
      return {...state, display: action.display}
    default: 
      return state
  }
}

export default gameOverReducer