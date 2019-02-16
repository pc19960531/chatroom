
import React, { Component } from 'react'
import styles from './index.css'
import { Link } from 'react-router-dom'

class Signin extends Component {
    render() {
        return (
            <div className={styles.signin}>
                <div className={styles.content}>
                    <div className={styles.panel}>
                        <div className={styles.inputwrap}>
                            <div className={styles.input}>
                                <input placeholder="请输入手机号"></input>
                            </div>
                            <div className={styles.input}>
                                <input placeholder="请输入密码"></input>
                            </div>
                        </div>
                    </div>
                    <button>
                        注册
                    </button>
                </div>
                <div className={styles.footer}>
                    <div className={styles.links}>
                        <Link to='/'>专栏</Link>
                        <Link to='/'>圆桌</Link>
                        <Link to='/'>发现</Link>
                        <Link to='/'>移动</Link>
                        <Link to='/'>联系我们</Link>
                        <Link to='/'>工作室</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin