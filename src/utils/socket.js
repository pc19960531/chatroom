import io from 'socket.io-client';
import store from '../store'

// browser
const log = console.log;

// init
const socket = io('/v1');

export const socketInit = (cb) => {
  socket.on('connect', () => {
    const id = socket.id;
    log('#connect,', id, socket);
    store.dispatch({ type: 'HOME_INIT_SET', data: id })
  });

  // 接收在线用户信息
  socket.on('online', msg => {
    log('#online,', msg);
  });

  // 系统事件
  socket.on('disconnect', msg => {
    log('#disconnect', msg);
  });

  socket.on('disconnecting', () => {
    log('#disconnecting');
  });

  socket.on('error', () => {
    log('#error');
  });

  // 监听自身 id 以实现 p2p 通讯
  socket.on('receiveMessage', msg => {
    log('#receive,', msg);
    store.dispatch({ type: 'CHAT_CHANGE_MESSAGE', data: '' })
    const currentMsgList = store.getState().chat.messageList;
    const newMsgList = [...currentMsgList, msg]
    store.dispatch({ type: 'CHAT_GET_MESSAGE', data: newMsgList })
  });

  // window.socket = socket;
};

export const sendMsg = ({ msg, name, id, choosenAvater }) => {
  console.log('msg:' + msg)
  socket.emit('sendMessage', { msg, name, id, choosenAvater });

  // socket.broadcast.emit('res', {
  //   target,
  //   payload: {
  //     msg
  //   },
  // }
  // )
}