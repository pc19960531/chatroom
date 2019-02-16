const DEFAULT_NAME = 'CHAT'

const defaultState = {
  messageList: [],
  message: ''

}

export default function (state = defaultState, action) {
  switch (action.type) {
    case `${DEFAULT_NAME}_GET_MESSAGE`: return { ...state, messageList: action.data };
    case `${DEFAULT_NAME}_CHANGE_MESSAGE`: return { ...state, message: action.data };
    default: return state;
  }

}