
import React, { Component } from 'react'
import styles from './index.css'
import { Link } from 'react-router-dom'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class SignIn extends Component {
    render() {
        return (
            <div className={styles.signin}>
                <div className={styles.content}>
                    <Tabs onChange={(key) => {
                        console.log(key)
                    }} type="card">
                        <TabPane tab="Tab 1" key="1">
                            <div className={styles.panel}>
                                <div className={styles.inputwrap}>
                                    <div className={styles.input}>
                                        <div>
                                            手机号
                                </div>
                                        <input placeholder="请输入手机号"></input>
                                    </div>
                                    <div className={styles.input}>
                                        <div>
                                            密码
                                </div>
                                        <input placeholder="请输入密码"></input>
                                    </div>
                                </div>
                                <div className={styles.submit}>
                                    <button
                                        onClick={() => {
                                            this.props.history.goBack();
                                        }}
                                        className={styles.backbutton}
                                    >
                                        返回
                            </button>
                                    <button>
                                        登录
                            </button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default SignIn