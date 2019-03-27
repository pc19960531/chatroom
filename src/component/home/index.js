import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'
import store from '../../store'

class Home extends Component {
    render() {
        const { avatars, choosenAvater, name } = this.props;
        return (
            <div className={styles.index}>
                <div className={styles.header}>
                    请选择一个头像
                </div>
                <div className={styles.avatarWrap}>
                    {
                        avatars.map(i => (<div className={styles.avatar}>
                            <div
                                className={choosenAvater === i ? styles.choosen : ''}
                                onClick={() => {
                                    store.dispatch({ type: 'HOME_CHANGE_AVATER', data: i })
                                }}
                            >
                                <img src={i} />
                            </div>
                        </div>))
                    }
                </div>
                <div className={styles.nameWrap}>
                    <input
                        placeholder='请输入一个昵称'
                        value={name}
                        onChange={(e) => {
                            let name = e.target.value;
                            if (name.length > 10) {
                                return
                            }
                            store.dispatch({ type: 'HOME_CHANGE_NAME', data: name })
                        }}
                    />
                </div>
                <div className={styles.submit}>
                    <button
                        onClick={() => {
                            if (!name) {
                                alert('请输入昵称')
                                return;
                            }
                            if (!choosenAvater) {
                                alert('请选择一个头像')
                                return;
                            }
                            this.props.history.push('/chat')
                        }}
                    >
                        游客登录
                    </button>
                </div>
                <div className={styles.submit}>
                    <button
                        onClick={() => {
                            this.props.history.push('/signin')
                        }}
                    >
                        账号登录
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(state => state.home)(Home)