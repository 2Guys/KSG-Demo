import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import playerReducer from '../features/player/reducer'
import enemyReducer from '../features/enemy/reducer'
import attackReducer from '../features/player/attack/reducer'
import enemyAttackReducer from '../features/enemy/attack/reducer';
import gameOverReducer from '../features/game over/reducer'

const rootReducer = combineReducers({
  player: playerReducer,
  enemy: enemyReducer,
  attack: attackReducer, 
  enemyAttack: enemyAttackReducer,
  gameOver: gameOverReducer 
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(rootReducer, middleware)


export default store