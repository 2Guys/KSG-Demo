const MOVE_PLAYER  = "MOVE_PLAYER"
const CHECK_MOVE = "CHECK_MOVE"
const INCREASE_HP = "INCREASE_HP"
const DECREASE_HP = "DECREASE_HP"
const INCREASE_SB = "INCREASE_SB"
const DECREASE_SB = "DECREASE_SB"
const INCREASE_RATE = "INCREASE_RATE"
const DECREASE_RATE = "DECREASE_RATE"

export const increasedHP = (HP) => {
  return {
    type: INCREASE_HP,
     HP
  }
}

export const decreasedHP = (HP) => {
  return {
    type: DECREASE_HP,
    HP
  }
}

export const increasedSB = (SB) => {
  return {
    type: INCREASE_SB,
    SB
  }
}

export const decreasedSB = (SB) => {
  return {
    type: DECREASE_SB,
    SB
  }
}

export const increasedRate = (rate) => {
  return {
    type: INCREASE_RATE,
    rate
  }
}

export const decreasedRate = (rate) => {
  return {
    type: DECREASE_RATE,
    rate
  }
}


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
      return { ...state, movement: action.payload.movement}
    case INCREASE_HP: 
      return { ...state, HP: action.HP}
    case DECREASE_HP: 
      return { ...state, HP: action.HP}
    case INCREASE_SB: 
      return { ...state, SB: action.SB}
    case DECREASE_SB: 
      return { ...state, SB: action.SB}
    case INCREASE_RATE: 
      return { ...state, rate: action.rate}
    case DECREASE_RATE: 
      return { ...state, rate: action.rate}
    default:
      return state
  }
}

export default playerReducer
