import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import playerReducer from '../features/player/reducer'
import enemyReducer from '../features/enemy/reducer'

const rootReducer = combineReducers({
  player: playerReducer,
  enemy: enemyReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(rootReducer, middleware)


export default store