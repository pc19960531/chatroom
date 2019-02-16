import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import style from './index.css'
import { sendMsg } from '../../utils/socket'
import store from '../../store';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { messageList, message, name, id, choosenAvater } = this.props;
    if (!name) {
      return <Redirect to='/' />
    }
    return (
      <div className={style.chat}>
        <div className={style.messagewrap}>
          <div className={style.list}>
            <div className={style.content}>
              {
                messageList.length > 0 && messageList.map(i => (
                  <div className={i.meta.id === id ? style.mymessage : style.message}>
                    <div className={style.avatar}>
                      <img src={i.meta.avater} />
                    </div>
                    <div className={style.show}>
                      <div className={i.meta.id === id ? style.myname : style.name}>
                        {i.meta.name}
                      </div>
                      <div className={style.msg}>
                        {i.data.payload}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.sendWrap} >
            <div className={style.left}>
              <textarea
                className={style.area}
                value={message}
                onChange={(e) => {
                  store.dispatch({ type: 'CHAT_CHANGE_MESSAGE', data: e.target.value })
                }}
              />
            </div>
            <div className={style.right}>
              <button
                onClick={() => {
                  sendMsg({ msg: message, name, id, choosenAvater })
                }}
              >
                发送
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ ...state.chat, ...state.home }))(Chat);