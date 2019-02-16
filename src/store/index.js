import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from '../reducer'
import thunkMiddleware from 'redux-thunk' // 允许我们 dispatch() 函数

let store = null;

store = createStore(reducer,
    applyMiddleware(
        logger, thunkMiddleware
    )
)

window.__store = store
export default store