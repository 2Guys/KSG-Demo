const UPDATE_CLASS = "UPDATE_CLASS"

const initialState = {   
  classUpdate: 'ultralightBeam'
}

const attackReducer = (state=initialState, action) => {
  switch(action.type){
    case UPDATE_CLASS:
      return { ...state, classUpdate: action.classUpdate}
    default:
      return state
  }
}

export default attackReducer