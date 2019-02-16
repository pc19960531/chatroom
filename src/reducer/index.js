import { combineReducers } from 'redux'
import home from '../component/home/reducer'
import chat from '../component/chat/reducer'

export default combineReducers({
    home,
    chat
})