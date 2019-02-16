
const DEFAULT_NAME = 'HOME'
const url = 'http://yxc-1256911926.cos.ap-shanghai.myqcloud.com/img/icon-test';

const initState = {
    name: '',
    id: '',
    choosenAvater: '',
    avatars: [`${url}.png`, `${url}_1.png`, `${url}_2.png`, `${url}_3.png`, `${url}_4.png`, `${url}_5.png`, `${url}_6.png`, `${url}_7.png`, `${url}_8.png`, `${url}_9.png`]
}

export default function (state = initState, action) {
    switch (action.type) {
        case `${DEFAULT_NAME}_INIT_SET`: return { ...state, id: action.data };
        case `${DEFAULT_NAME}_CHANGE_AVATER`: return { ...state, choosenAvater: action.data };
        case `${DEFAULT_NAME}_CHANGE_NAME`: return { ...state, name: action.data };
        default: return state;
    }
}